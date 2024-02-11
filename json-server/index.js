const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost:8000')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.use(jsonServer.defaults({}));

// Delay
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});