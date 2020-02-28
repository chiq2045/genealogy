require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');

const genealogy = new Koa();

genealogy.use(logger());
genealogy.use(serve('./dist'));

genealogy.listen(process.env.SERVER_PORT);
