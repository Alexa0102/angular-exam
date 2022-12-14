const express = require('express');
const app = express();
const cors = require('cors')
const server = require('./environment');
const initDatabase = require('./configs/database');
const routes = require('./routes');
const { authMiddleware } = require('./middlewares/auth');

app.use(cors({credentials: true, origin: 'http://localhost:4200', allowedHeaders: ['Content-Type, X-Authorization']}))

app.use(express.json())
app.use(authMiddleware)
app.use(routes)

initDatabase()
.then(() => {
    app.listen(server.PORT, () => console.log(`Server listening on http://localhost:${server.PORT}`))
})
.catch((err) => console.log(err))
