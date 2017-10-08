/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();
 
router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { name: 'Express' });
});

//http://localhost:1337/test/bob
router.get('/test/:name', function (req, res) {
    var fileName = req.params.name;
    res.render('index', { name: name});
})



export default router;