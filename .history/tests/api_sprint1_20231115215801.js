const { expect } = require("chai");
const chai = require("chai");
chai.use(require("chai-http"));
const getpage = require("../page-objects/api_get_request.js");
const cases = require("../test-cases/case_sprint1.js");
const postpage = require("../page-objects/api_post_request.js");
const global = require("../helper/global.js");
const data = require("../helper/dataTest.js");


describe('Sprint 1', () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbTh1MGo3d3BvMXdjd2t5ai5hcGkueW9yaXBlLmNvbVwvYXV0aFwvb2F1dGgiLCJpYXQiOjE2OTgyOTA2MzIsIm5iZiI6MTY5ODI5MDYzMiwianRpIjoibjNMZnY2TUNzRUNaQjBpdSIsInN1YiI6MTQwNCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.JoCTSkd_lWBU_iIRdN25DFJw9NexiHQM2ayVPfpTbhA'
    it(`@sprint1-TS001 ${cases.scenario.HomepageGroupList.positive}`, async() => {
        const res = await getpage.getAPI(token)
        expect(res).to.have.status(200)
        console.log(res.body)
    })

    it.only(`@sprint1-TS002 ${cases.scenario.CreateGC.positive}`, async() => {
        response = await postpage.postAPI(token)
            .then(response => {
                return response
            });
        expect(response).to.have.status(200)    
        // expect(res).to.have.status(200)
        // console.log(res.body)
    })
});