const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);

function getAPI(path, token) {
    return api
        .get(path)
        .set({authorization: "Bearer " + token})
        .set("User-Agent", "PostmanRuntime/7.34.0")
        .set("Accept-Encoding", "gzip, deflate, br")
        .set("Accept", "*/*")
        .set("Connection", "keep-alive")
}

module.exports = {
    getAPI
};