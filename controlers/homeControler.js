const cats = require('../data/cats');

module.exports = (req, res) => {
    const search = req.query.search || undefined;
    let items = '';

    const data = Object
        .entries(cats)
        .map(([id, d]) => ({
            id,
            name: d.name,
            description: d.description,
            breed: d.breed
        }));

    if (search) {
        const cat = data.filter(x => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        items = cat;

    } else {
        items = data;
    }

    const ctx = { itm: items };
    res.render('home', ctx);
}