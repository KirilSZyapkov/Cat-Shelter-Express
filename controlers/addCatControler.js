const fs = require('fs/promises');
const breeds = require('../data/breed');
const cats = require('../data/cats');
const path = require('path');
const formidable = require('formidable');

module.exports = (req, res) => {
    if (req.method === 'POST') {
        const form = formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            
            const filePath = path.normalize(path.join(__dirname, '../data/cats.json'));
            const i = '_' + Math.random().toString(36).substr(2, 9);
            cats[i] = fields;
            fs.writeFile(filePath, JSON.stringify(cats, null, 2));
            res.redirect('/');
        })
    } else if (req.method === 'GET') {
        const itm = breeds.map((x) => x.breed);
        itm.sort();
        const data = { list: itm }
        res.render('addCat', data);
    }

}