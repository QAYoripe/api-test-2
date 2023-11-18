const path = require('path');
const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);
const apiPath = "/v1/gc/rooms";
const data = require("../helper/dataTest.js");


const postAPI = (token, body) => api.post(apiPath)
    .set("Authorization", "Bearer " + token)
    .set("User-Agent", "PostmanRuntime/7.34.0")
    .set("Accept-Encoding", "gzip, deflate, br")
    .set("Accept", "*/*")
    .set("Connection", "keep-alive")
    .send(body);

// function postAPI(path, token, body) {
    // return api
        // .post(path)
        // .set("User-Agent", "PostmanRuntime/7.34.0")
        // .set("Accept-Encoding", "gzip, deflate, br")
        // .set("Accept", "*/*")
        // .set("Connection", "keep-alive")
        // .set("Authorization", "Bearer " + token)
        // .send(body);
// }

module.exports = {
    postAPI
};