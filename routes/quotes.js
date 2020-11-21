const {
    index,
    create,
    update,
    destroy
} = require('../controllers/quotes');

module.exports = router => {
    // localhost:4000/quotes
    router.get('/quotes', index);
    // localhost:4000/quotes
    router.post('/quotes', create);
    // localhost:4000/quotes/update
    router.post('/quotes/update', update);
    // localhost:4000/quotes/destroy
    router.post('/quotes/destroy', destroy);
};