console.log("on passe dans le controllers/root.controller.js");

exports.home = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

exports.contact = (req, res, next) => {
    res.render('formulaire', { title: "BailGui was here" })
};



