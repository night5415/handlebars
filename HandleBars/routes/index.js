"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { name: 'Express' });
});
//http://localhost:1337/test/bob
router.get('/test/:name', function (req, res) {
    var fileName = req.params.name;
    res.render('index', { name: name });
});
exports.default = router;
//# sourceMappingURL=index.js.map