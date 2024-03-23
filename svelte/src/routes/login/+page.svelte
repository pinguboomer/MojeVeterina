<script>
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token, user} from "../../stores.js";
    import {getCookie} from "../../lib/js/cookie-parser.js";

    let body = {
        username: "",
        password: ""
    }

    let message = ""

    async function submitForm() {
        if (body.username.length === 0 && body.password.length === 0) return;

        const res = await fetch(PUBLIC_API_URL+'/token', {
            method: 'POST',
            credentials: 'include', // include, *same-origin, omit
            headers: {
                // 'Content-Type': 'application/json'
                'Authorization': 'Basic ' + btoa(body.username + ":" + body.password)
            }
            // redirect: '/calendar', // manual, *follow, error
            // body: JSON.stringify(body) // body data type must match "Content-Type" header
        })

        if (res.status === 401) {
            message = "Špatné uživatelské jméno nebo heslo."
        }

        if (!res.ok) {
            return;
        }

        token.set(await res.text())
        user.set(atob(getCookie("jwt_payload")))
        window.location.replace("/")
    }
</script>

<!--<div id="login-site">-->
<div id="login-form-wrap">
    <form id="login-form">
        <h2>Login</h2>
        <p id="p-errorMessage">{message}</p>
        <p>
            <label>Uživatelské jméno:
                <br/> <input type="text" bind:value={body.username} placeholder="Username"/></label>
            <br/>
        </p>
        <p>
            <label>Heslo:
                <br/><input type="password" bind:value={body.password} placeholder="Password"/></label>
            <br/>
        </p>
        <p>
            <button type="button" id="login" on:click={submitForm}>Přihlásit se</button>
        </p>
    </form>
</div>
<!--</div>-->

<style>

    h2 {
        font-weight: 300;
        text-align: center;
    }

    a {
        border: none;
        background-color: #c94c4c;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        text-decoration-line: none;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 18px;
        position: relative;
        display: inline-block;
        margin-bottom: 30px;
        box-sizing: border-box;
        width: 100%;
        outline: none;
        height: 60px;
        line-height: 60px;
        border-radius: 4px;
    }

    #login-form-wrap {
        width: 35%;
        margin: 30px auto;
        text-align: center;
        padding: 0;
        border-radius: 4px;
        box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
    }

    #login-form {
        padding: 0 60px 0 60px;
    }

    input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        outline: none;
        height: 60px;
        line-height: 60px;
        border-radius: 4px;
    }

    input[type="password"],
    input[type="text"] {
        width: 100%;
        padding: 0 0 0 10px;
        margin: 0;
        color: #8a8b8e;
        border: 1px solid #c2c0ca;
        font-style: normal;
        font-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
        display: inline-block;
        background: none;
    }

    input[type="password"]:focus,
    input[type="text"]:focus {
        border-color: #3ca9e2;
    }

    input[type="password"]:focus:invalid,
    input[type="text"]:focus:invalid {
        color: #cc1e2b;
        border-color: #cc1e2b;
    }

    input[type="password"]:valid ~ .validation,
    input[type="text"]:valid ~ .validation {
        display: block;
        border-color: #0C0;
    }

    input[type="password"]:valid ~ .validation span,
    input[type="text"]:valid ~ .validation span {
        background: #0C0;
        position: absolute;
        border-radius: 6px;
    }

    input[type="password"]:valid ~ .validation span:first-child,
    input[type="text"]:valid ~ .validation span:first-child {
        top: 30px;
        left: 14px;
        width: 20px;
        height: 3px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    input[type="password"]:valid ~ .validation span:last-child,
    input[type="text"]:valid ~ .validation span:last-child {
        top: 35px;
        left: 8px;
        width: 11px;
        height: 3px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .validation {
        display: none;
        position: absolute;
        content: " ";
        height: 60px;
        width: 30px;
        right: 15px;
        top: 0px;
    }

    input[type="submit"] {
        border: none;
        display: block;
        background-color: #3ca9e2;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        font-size: 18px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        margin-bottom: 15px;
    }

    input[type="submit"]:hover {
        background-color: #329dd5;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    #p-errorMessage {
        color: red;
        font-weight: bold;
    }

</style>