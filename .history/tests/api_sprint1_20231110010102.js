const { expect } = require("chai");
const chai = require("chai");
chai.use(require("chai-http"));
const getAPI = require("../page-objects/api_get_request.js");
const apiPath = "/v1/gc/users/joined-rooms?page=1&perPage=30";
const cases = require("../../test-cases/case_sprint1.js");

describe('Sprint 1', () => {
    it('GET List group in home page', async () => {
        const response = await api.getAPI(apiPath)
        console.log(response.data)
    })
});