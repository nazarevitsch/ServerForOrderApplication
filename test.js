const request = require('supertest');
const assert = require('assert');
const app = require('./index.js').app;
const mocha = require('mocha');


describe('All tests', () => {
    it('Test "/"', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
    it('Test "/restaurants"', function(done) {
        request(app)
            .get('/restaurants')
            .set('filters', '')
            .expect(200)
            .end(done);
    });
    it('Test "/signIn"', function(done) {
        request(app)
            .get('/signIn')
            .set('login', 'test@gmail.com')
            .set('password', '')
            .expect(200)
            .end(done);
    })
    it('Test "/signUp"', function(done) {
        request(app)
            .get('/signUp')
            .set('login', 'test@gmail.com')
            .set('password', '1234567890')
            .set('phone', '0983643636')
            .set('name', 'user')
            .expect(200)
            .end(done);
    });
    it('Test "/img"', function(done) {
        request(app)
            .get('/img')
            .set('name', 'test.jpg')
            .expect(200)
            .end(done);
    });
    it('Test "/item"', function(done) {
        request(app)
            .get('/item')
            .set('id', '1')
            .expect(200)
            .end(done);
    });
    // it('Test "/forgotPass1"', function(done) {
    //     request(app)
    //         .get('/forgotPass1')
    //         .set('login', 'test@gmail.com')
    //         .expect(200)
    //         .end(done);
    // });
    // it('Test "/forgotPass2"', function(done) {
    //     request(app)
    //         .get('/forgotPass2')
    //         .set('login', 'test@gmail.com')
    //         .set('code', '111111')
    //         .expect(200)
    //         .end(done);
    // });
    it('Test "/categories"', function(done) {
        request(app)
            .get('/categories')
            .expect(200)
            .end(done);
    });
});

