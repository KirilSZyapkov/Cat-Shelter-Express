const fs = require('fs/promises');
const cats = require('../data/cats');
const breeds = require('../data/breed');
const path = require('path');
const formidable = require('formidable');


module.exports = {
    edit(req, res) {
        const item = cats[req.params.id];
        item.id = req.params.id;
        const itm = breeds.map((x) => x.breed);
        itm.sort();
        const data = {
            param: item,
            list: itm
        };

        res.render('editCat', data);
    },
    post(req, res) {
        const id = req.params.id;
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields) => {
            const pathFile = path.normalize(path.join(__dirname, '../data/cats.json'));
            cats[id] = fields;
            await fs.writeFile(pathFile, JSON.stringify(cats, null, 2));
            res.redirect('/');
        });
    }
}