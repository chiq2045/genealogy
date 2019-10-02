require('dotenv').config();

const Koa = require('koa');
const logger = require('koa');
const bodyParser = require('koa-body');
// const Router = require('@koa/router');

const genealogy = new Koa();
// const router = new Router();
const { PORT } = process.env;

// router.get('/api/v1/genealogy', showGenealogy);
// function * showGenealogy(ctx, next) {
//   ctx.body = genealogyExample;
//   yield next;
// }
genealogy
  .use(logger())
  .use(bodyParser({
    json: true
  }));

genealogy.use((ctx, next) => {
  ctx.body = 'Welcome to the genealogy page';
});

genealogy.listen(PORT);
