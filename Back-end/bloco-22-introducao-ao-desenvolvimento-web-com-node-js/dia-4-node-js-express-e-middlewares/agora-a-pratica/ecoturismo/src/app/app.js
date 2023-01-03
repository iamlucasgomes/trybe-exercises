const express = require('express');
const activitiesRouter = require('../routers/activities.router');
const signupRouter = require('../routers/signup.router');

const app = express();

app.use(express.json());
app.use(activitiesRouter);
app.use(signupRouter);

module.exports = app;