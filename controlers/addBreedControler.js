const fs = require('fs/promises');
const breed = require('../data/breed');
const path = require('path');

module.exports = (req, res) => {

    const formD = req.body.breed;
    const body = req.body;

    if (formD) {
        const item = breed.find((x) => x.breed === formD);
        
        if (item === undefined || item.breed !== formD) {

            const filePath = path.normalize(path.join(__dirname, '../data/breed.json'));
            breed.push(body);
            fs.writeFile(filePath, JSON.stringify(breed, null, 2), (err) => {
                if (err) {
                    return console.log(err);
                }
            });
            res.redirect('/');
        } else {
            res.render('addBreed', item);;
        }
    } else {

        res.render('addBreed');
    }
}