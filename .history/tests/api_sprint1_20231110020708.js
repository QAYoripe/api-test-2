const { expect } = require("chai");
const chai = require("chai");
chai.use(require("chai-http"));
const api = require("../page-objects/api_get_request.js");
const apiPath = "/v1/gc/users/joined-rooms?page=1&perPage=30";
const cases = require("../test-cases/case_sprint1.js");
const token = 'eyJpc3MiOiJodHRwczpcL1wvbTh1MGo3d3BvMXdjd2t5ai5hcGkueW9yaXBlLmNvbVwvYXV0aFwvb2F1dGgiLCJpYXQiOjE2OTgyOTA2MzIsIm5iZiI6MTY5ODI5MDYzMiwianRpIjoibjNMZnY2TUNzRUNaQjBpdSIsInN1YiI6MTQwNCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9'

describe('Sprint 1', () => {
    
    it('GET List group in home page', async () => {
        const response = await api.getAPI(apiPath, token)
        console.log(response.data)
        expect(response.status).to.oneOf([200,201])
    })
});