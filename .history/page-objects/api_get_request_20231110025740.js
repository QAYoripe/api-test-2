const path = require('path');
const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);
const apiPath = "/v1/gc/users/joined-rooms?page=1&perPage=30";

const getAPI = (token) => api.get(apiPath)
    .set("Authorization", "Bearer " + token)

// function getAPI(path) {
    // return api
        // .get(path)
        // .set("User-Agent", "PostmanRuntime/7.34.0")
        // .set("Accept-Encoding", "gzip, deflate, br")
        // .set("Accept", "*/*")
        // .set("Connection", "keep-alive")
// }

module.exports = {
    getAPI
};