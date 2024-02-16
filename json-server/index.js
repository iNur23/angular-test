const fs = require('fs');
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
server.use(jsonServer.bodyParser);

// Delay
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Login
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.statusMessage = 'Empty username or password'
            return res.status(400).end();
        }
        
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json({ ...userFromBd, password: undefined });
        }

        res.statusMessage = 'User not found'
        return res.status(403).end();
    } catch (e) {
        console.log(e);
        res.statusMessage = e.message
        return res.status(500).end();
    }
});

// Registration
server.post('/registration', (req, res) => {
    try {
        const { username, password, ...otherData } = req.body;

        if (!username || !password) {
            res.statusMessage = 'Empty username or password'
            return res.status(400).end();
        }

        const dbPath = path.resolve(__dirname, 'db.json')
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username,
        );

        if (userFromBd) {
            res.statusMessage = 'User already exists'
            return res.status(409).end();
        }

        users.push({ username, password, ...otherData })
        const newDbString = JSON.stringify({
            ...db,
            users
        }, null, 4)

        fs.writeFileSync(dbPath, newDbString)
        return res.json({ username, ...otherData });
    } catch (e) {
        console.log(e);
        res.statusMessage = e.message
        return res.status(500).end();
    }
});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});