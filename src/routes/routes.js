const { Router } = require('express');

const router = Router();

router.all('/get', (req, res, next) => {
    console.log('I passed for here');
    next();
});

router.get('/', (req, res) => {
    const data = [
        {
            firstName: 'firstName1',
            lastName: 'lastName1'
        },
        {
            firstName: 'firstName2',
            lastName: 'lastName2'
        },
        {
            firstName: 'firstName3',
            lastName: 'lastName3'
        }
    ]
    res.render('home.ejs', {people: data});
});

router.get('/get', (req, res) => {
    res.json({
        username: 'Salvador J',
        lastName: 'Galliano M' 
    });
});

router.post('/post', (req, res) => {
    res.send('Request POST');
});

router.put('/put', (req, res) => {
    res.send('Request PUT');
});

router.delete('/delete', (req, res) => {
    res.send('Request DELET');
});


module.exports = router;