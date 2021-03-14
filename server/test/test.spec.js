const chai = require('chai');
const expect = chai.expect;
const server = require('../index');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('GET test', () => {
  it('should be 200', () => {
    chai.request(server).get('/').end((err, res) => {
      expect(res).to.be.json;
      expect(res).to.have.status(200);
    });
  })
});

describe('GET with id test', () => {
    it('should be 404', () => {
      chai.request(server).get('/yt3itu43iyt4y').end((err, res) => {
        expect(res).to.be.json;
        expect(res).to.have.status(404);
      });
    })
  });

describe('POST test', () => {
  it('should be 201', () => {
    chai.request(server).post('/').end((err, res) => {
      expect(res).to.be.json;
      expect(res).to.have.status(201);
    });
  })
});

describe('PUT test', () => {
  it('should be 200', () => {
    chai.request(server).put('/ruoru2o3u2o3').end((err, res) => {
      expect(res).to.be.json;
      expect(res).to.have.status(200);
    });
  })
});

describe('DELETE test', () => {
  it('should be 200', () => {
    chai.request(server).delete('/23428908r329').end((err, res) => {
      expect(res).to.be.json;
      expect(res).to.have.status(200);
    });
  })
});