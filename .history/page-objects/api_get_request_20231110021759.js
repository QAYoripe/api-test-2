const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);

function getAPI(path) {
    return api
        .get(path)
        .set("Authorization","Bearer eyJpc3MiOiJodHRwczpcL1wvbTh1MGo3d3BvMXdjd2t5ai5hcGkueW9yaXBlLmNvbVwvYXV0aFwvb2F1dGgiLCJpYXQiOjE2OTgyOTA2MzIsIm5iZiI6MTY5ODI5MDYzMiwianRpIjoibjNMZnY2TUNzRUNaQjBpdSIsInN1YiI6MTQwNCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9")
        .set("User-Agent", "PostmanRuntime/7.34.0")
        .set("Accept-Encoding", "gzip, deflate, br")
        .set("Accept", "*/*")
        .set("Connection", "keep-alive")
}

module.exports = {
    getAPI
};