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
            return res.status(400).json({ message: 'Empty username or password' });
        }
        
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json({ ...userFromBd, password: undefined });
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Registration
server.post('/registration', (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Empty username or password' });
        }

        const dbPath = path.resolve(__dirname, 'db.json')
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username,
        );

        if (userFromBd) {
            return res.status(409).json({ message: 'User already exists' });
        }

        users.push({ username, password })
        const newDbString = JSON.stringify({
            ...db,
            users
        }, null, 4)

        fs.writeFileSync(dbPath, newDbString)
        return res.json({ username });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});