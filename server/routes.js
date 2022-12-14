const router = require('express').Router();
const authController = require('./controllers/authController')
const bookController = require('./controllers/bookController')

router.get('/', (req, res) => {
    // req.headers['X-Authorization'] = 'asdjpoiasdqi9h402rjpm'
    let token = req.headers['X-Authorization'] | 'nothing'
    res.json(token)
    // res.end()
})
router.use('/books',bookController)

router.use(authController)
    
module.exports = router;