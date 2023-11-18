const { expect } = require("chai");
const chai = require("chai");
chai.use(require("chai-http"));
const page = require("../page-objects/api_get_request.js");
const cases = require("../test-cases/case_sprint1.js");


describe('Sprint 1', () => {
    // let baseUrl = 'https://m8u0j7wpo1wcwkyj.api.yoripe.com'
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbTh1MGo3d3BvMXdjd2t5ai5hcGkueW9yaXBlLmNvbVwvYXV0aFwvb2F1dGgiLCJpYXQiOjE2OTgyOTA2MzIsIm5iZiI6MTY5ODI5MDYzMiwianRpIjoibjNMZnY2TUNzRUNaQjBpdSIsInN1YiI6MTQwNCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.JoCTSkd_lWBU_iIRdN25DFJw9NexiHQM2ayVPfpTbhA'
    // it('GET List group in home page', function(done) {
        // chai.request(baseUrl)
            // .get(apiPath)
            // .set("Authorization", "Bearer " + token)
            // .then((res) => {
                // expect(res).to.have.status(200)
                // const body = res.body
                // console.log(body)
                // done();  
            // }).catch((err)=> done(err))
    // }),

    it(`@get ${cases.scenario.HomepageGroupList}`, async() => {
        const res = await page.getAPI(token)
        expect(res).to.have.status(200)
        console.log(res.body)
    })
});