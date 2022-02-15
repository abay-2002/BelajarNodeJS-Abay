// const nodeFetch = require('node-fetch');
// const express = require('express');
// const dotenv = require('dotenv');
import node_fetch from 'node-fetch';
import express from "express";
import dotenv from "dotenv";

// ExpressJS
const app = express();

// .env configuration
const port = process.env.PORT || 3000;
dotenv.config();
const github_client_id = process.env.GITHUB_CLIENT_ID;
const github_client_secret = process.env.GITHUB_CLIENT_SECRET;

app.get('/', (req, res) => {
    res.send('<a href="/login/github/">Login</a> with GitHub');
})

// == 1.request user github identity ==
app.get('/login/github/', (req, res)=>{
    const url = `https://github.com/login/oauth/authorize?client_id=${github_client_id}&client_secret=${github_client_secret}`;
    res.redirect(url);
});

// == 2.Users are redirected back to your site by GitHub / get Token ==
async function get_access_token(code){
    const res = await node_fetch(`https://github.com/login/oauth/access_token?client_id=${github_client_id}&client_secret=${github_client_secret}&code=${code}`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            github_client_id,
            github_client_secret,
            code
        })
    });
    const data = await res.text();
    const params = new URLSearchParams(data);
    return params.get('access_token');
}

// == 3.Use Access Token to Access the API ==
async function get_user_data(token){
    const res = await node_fetch(`https://api.github.com/user`, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    const data = await res.json();
    return data;
}

// callback url / Exchange Auth grant to Access Token
app.get('/login/github/callback/', async (req, res) => {
    const code = req.query.code;
    const token = await get_access_token(code);
    const github_data = await get_user_data(token);
    res.json(github_data);
});

app.listen(port, () => {
    console.log(`App is listening to http://localhost:${port}`);
});