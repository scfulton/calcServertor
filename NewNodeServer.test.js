// JEST TESTS

// const Calcserverator = require('./NewNodeServer');

// describe ( 'Calcserverator ', ()=> {
//     test(' exists', ()=>{
//         const subject = new Calcserverator();
//         expect (subject.res.setHeader).toEqual("Access-Control-Allow-Origin")

//     })
// })


// SUPERTEST
const app = require('./NewNodeServer') // Link to your server file
const supertest = require('supertest')
const request = supertest(new app)

// app.get('/', async (req, res) => {
//     res.json({message: 'pass!'})
//   })

//   it('Gets the test endpoint', async done => {
//     // Sends GET Request to /test endpoint
//     const res = await request.get('/')
    
//     expect(response.status).toBe(200)
//     expect(response.body.message).toBe('pass!')
//     done()
  
//     // ...
//     done()
//   })

describe('GET /users', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// it('gets the test endpoint', async done => {
//     const response = await request.get('/')
  
//     expect(response.status).toBe(200)
//     expect(response.body.message).toBe('pass!')
//     done()
//   })