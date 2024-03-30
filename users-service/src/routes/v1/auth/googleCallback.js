const {User} = require("../../../model/User");
const signToken = require("../../../functions/signToken");

async function googleCallback(req, res) {
    const { code } = req.query;

    const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            code,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
        }),
    })

    if (!response.ok) {
        if (process.env.NODE_ENV === "development") {
            console.error('Google Error [TOKEN]:', response.statusText);
            console.error(await response.json())
        }
        return res.sendStatus(500)
    }

    const data = await response.json();
    console.log('DATA', data)

    const { access_token, id_token } = data;

    // Use access_token or id_token to fetch user profile
    const response1 = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!response1.ok) {
        if (process.env.NODE_ENV === "development") {
            console.error('Google Error [USER_INFO]:', response1.statusText);
            console.error(await response1.json())
        }
        return res.sendStatus(500)
    }

    const profile = await response1.json();

    // Code to handle user authentication and retrieval using the profile data
    console.log(profile)

    let user
    if (!await User.exists({google_id: profile.id})) {  // if user with profile id not exists
        user = await User.findOne({email: profile.email})

        if (user) {   // if user with email exists = local account => add google_id
            console.log('LOCAL USER EXISTS')
            try {
                user.google_id = profile.id
                await user.save()
            } catch(e) {
                return res.sendStatus(500)
            }
        }
        else{   // if user with email not exists = create new user
            console.log('USER NOT EXISTS')
            try {
                user = new User({
                    email: profile.email,
                    name: profile.given_name,
                    surname: profile.family_name,
                    google_id: profile.id,
                    typ: 'CUSTOMER'
                })
                await user.save()
            } catch(e) {
                return res.sendStatus(500)
            }
        }
    }
    else {  // user with profile id exists
        console.log('GOOGLE USER EXISTS')
        user = await User.findOne({google_id: profile.id}).lean()
    }

    try {   // create token
        delete user.password

        const token = signToken(user, true)

        res.status(200).send({token})
    }
    catch (e) {
        console.error(e)
        return res.sendStatus(500)
    }
}

module.exports = googleCallback;