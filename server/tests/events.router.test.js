const app = require('../routes/events.router');
const testServer = require('supertest');

describe('Testing api/events', () => {
    test('It should protect the api/events route', () => {
        testServer(app).get('/api/events')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/postUpcomingEvents route', () => {
        testServer(app).post('/api/events/postUpcomingEvents')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/getUserEvents route', () => {
        testServer(app).get('/api/events/getUserEvents')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/getUserEventsAdmin route', () => {
        testServer(app).get('/api/events/getUserEventsAdmin')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/getUpcomingEvents route', () => {
        testServer(app).get('/api/events/getUpcomingEvents')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/:id route', () => {
        testServer(app).delete('/api/events/:id')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/attendees/:id route', () => {
        testServer(app).get('/api/events/attendees/:id')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/attendee route', () => {
        testServer(app).put('/api/events/attendee')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/add route', () => {
        testServer(app).post('/api/events/add')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })

    test('It should protect the api/events/deleteEvent/:id route', () => {
        testServer(app).delete('/api/events/deleteEvent/:id')
        .then(response => {
            expect(response.statusCode).toBe(403);
        })
    })
})