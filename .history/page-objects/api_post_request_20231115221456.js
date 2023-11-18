const path = require('path');
const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);
const apiPath = "/v1/gc/rooms";
const data = require("../helper/dataTest.js");

const name = "QA Test";
const description = ["Try our best", "Find our happiness"];

const postAPI = (token) => api
    .post("/v1/gc/rooms")
    .set("Authorization", "Bearer " + token)
    .set('Content-Type', 'application/json')
    .send(data.body);

module.exports = {
    postAPI
};