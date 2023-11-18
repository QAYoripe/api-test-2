const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);

function getAPI(path, token) {
    return api
        .get(path)
        .set("Authorization", "Bearer " + token);
}

module.exports = {
    getAPI
};