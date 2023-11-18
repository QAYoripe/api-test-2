const { expect } = require("chai");
const chai = require("chai");
chai.use(require("chai-http"));
const getpage = require("../page-objects/api_get_request.js");
const cases = require("../test-cases/case_sprint1.js");
const postpage = require("../page-objects/api_post_request.js");
const global = require("../helper/global.js");
const data = require("../helper/dataTest.js");
const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BE_BASE_URL);


describe('Sprint 1', () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbTh1MGo3d3BvMXdjd2t5ai5hcGkueW9yaXBlLmNvbVwvYXV0aFwvb2F1dGgiLCJpYXQiOjE2OTgyOTA2MzIsIm5iZiI6MTY5ODI5MDYzMiwianRpIjoibjNMZnY2TUNzRUNaQjBpdSIsInN1YiI6MTQwNCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.JoCTSkd_lWBU_iIRdN25DFJw9NexiHQM2ayVPfpTbhA'
    it(`@sprint1-TS001 ${cases.scenario.HomepageGroupList.positive}`, async() => {
        const res = await getpage.getAPI(token)
        expect(res).to.have.status(200)
        console.log(res.body)
    })

    it.only(`@sprint1-TS002 ${cases.scenario.CreateGC.positive}`, async() => {
        const name = "QA Test";
        const description = ["Try our best", "Find our happiness"];

        response = await api
            .post('/v1/gc/rooms')
            .set("Authorization", "Bearer " + token)
            .send({
                "name":"ABC123",
                "description":["Lalala", "Yeyeye"],
                "picture":"https://s3-ap-southeast-1.amazonaws.com/yoripe-staging/uploads/2db6ac6b-741b-4970-aaad-edd4ddb19016.jpg",
                "members":[
                     {
                         "id":1403,
                         "username":"user_1403",
                         "displayName":"Rk",
                         "picture":""
                    },
                    {
                        "id":1407,
                        "username":"user_1407",
                        "displayName":"RK-GL",
                        "picture":"https://s3-ap-southeast-1.amazonaws.com/yoripe-staging/uploads/edef1325-4da4-4149-8fb8-053de484fabf.jpg"
                    },
                    {
                        "id":1405,
                        "username":"user_1405",
                        "displayName":"Rifky",
                        "picture":""
                    }],
                "purposes":["Connect & engage with fellow members"]
            })
            .then(response => {
                return response
            });
        expect(response.statusCode).to.be.equal(200)  
        // expect(res).to.have.status(200)
        // console.log(res.body)
    })
});