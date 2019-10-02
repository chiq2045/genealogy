const Koa = require('koa');
const logger = require('koa');
const bodyParser = require('koa-body');

const genealogy = new Koa();

genealogy
  .use(logger())
  .use(bodyParser({
    json: true
  }));

genealogy.use((ctx, next) => {
  ctx.body = 'Welcome to the genealogy page';
});

genealogy.listen(3007);
