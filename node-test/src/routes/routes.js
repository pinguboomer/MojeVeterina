const {Router} = require('express');
const router = Router();

const BlogPost = require('../model/BlogPost')


router.get('/', async (req, res) => {
    try {
        const posts = await BlogPost.find({})

        res.send(posts)
    }
    catch (err) {
        res.status(500).send({message: err})
    }
})

router.get('/vlozit', async (req, res) => {
    await new BlogPost({
        title: "První příspěvek",
        body: "Toto je první příspěvek"
    }).save()
    res.send("Příspěvek byl vložen")
})

const {exampleMiddleware} = require('../middlewares/exampleMiddleware')
router.get('/middleware', exampleMiddleware, async (req, res) => {
    res.send(req.ownData.message)
});


module.exports = router;