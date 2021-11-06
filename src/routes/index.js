//solo un index con un json
const { Router } = require('express');
const router = Router ();

//routes
router.get('/index', (req, res) =>{
    const data = {
        'nombre' : 'Orlando Ramon Carballo Cantu',
        'website' : 'https://github.com/orelcholor'
    };
    res.json({data});
});

module.exports = router;