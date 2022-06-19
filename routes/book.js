const router = require('express').Router();
const models = require('../db/models');
// make a post request to this route to create a new book
router.post('/create', (req, res) => {
    const { title, description, published } = req.body;
          models.Books.create({
                title,
                description,
                published,
            })
    .then((book) => {
        res.send(book);
        })
    .catch((err) => {
        res.send(err);
});
});

// get our all books from the database
router.get('/book', (req, res) => {
    models.Books.findAll()
    .then((books) => {
        res.json(books);
    })
    .catch((err) => {
        console.log(err);
    });
});

// get a single book from the database
router.get('/book/:id', (req, res) => {
   const { id } = req.params;
    models.Books.findByPk(id)
    .then((book) => {
        res.json(book);
    })
    .catch((err) => {
        console.log(err);
    });
});

// update a book in the database
router.put('/book/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, published } = req.body;
    models.Books.update({
        title,
        description,
        published,
    }, {
        where: {
            id,
        },
    })
    .then((book) => {
        res.json(book);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;
