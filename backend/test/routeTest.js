//let mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const assert = chai.assert; 
const expect  = chai.expect;

chai.should();
chai.use(chaiHttp);


describe('/GET shopItem', () => {
    it('should get all the shop items',     (done) => {
        chai.request(app)
        .get('shopitem/api/items')
        .then(res => {
            chai.expect(res.status).to.equal(200);
            //expect(res.status).to.be.equal(200);
            //res.should.have.status(200);
            //res.body.should.be.a('array');
            //res.body.length.should.be.eql(0);
            done()
        });
    });
});




/*
describe('/GET shopItem', () => {
    it('should get all the shop items', (done) => {
        chai.request(app)
        .get('shopitem/api/items')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
        done()
        });
    });
});

*/
