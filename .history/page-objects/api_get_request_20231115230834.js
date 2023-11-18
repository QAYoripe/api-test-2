const path = require('path');
const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);
const apiPath = "/v1/gc/users/joined-rooms?page=1&perPage=30";


const getAPI = (token) => api.get(apiPath)
    .set("Authorization", "Bearer " + token)

module.exports = {
    getAPI
};