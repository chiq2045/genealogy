const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'Welcome to the genealogy page';
});

app.listen(3007);
