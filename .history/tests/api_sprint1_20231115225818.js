const { expect } = require("chai");
const chai = require("chai");
chai.use(require("chai-http"));
const getpage = require("../page-objects/api_get_request.js");
const cases = require("../test-cases/case_sprint1.js");
const postpage = require("../page-objects/api_post_request.js");
const global = require("../helper/global.js");
const data = require("../helper/dataTest.js");




describe('Sprint 1', () => {
    
    it(`@sprint1-TS001 ${cases.scenario.HomepageGroupList.positive}`, async() => {
        const res = await getpage.getAPI(global.token)
        expect(res).to.have.status(200)
        console.log(res.body)
    })

    it.only(`@sprint1-TS002 ${cases.scenario.CreateGC.positive}`, async() => {
        res = await postpage.postAPI(token)
            .then((res) => {
                return res
            });
            expect(res.statusCode).to.be.equal(200)
            expect(res.body.message).to.be.equal(global.message.Success)
    })
});