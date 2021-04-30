const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./schema/schema');
const app = new Koa();

app.use(mount('/graphql', graphqlHTTP({
  schema: schema
})));

app.listen(4000);
