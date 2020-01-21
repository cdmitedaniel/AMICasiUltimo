const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'trasnpami'
const userCtrl = {};

userCtrl.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res, next) => {
    const user = new User({
        idpersona: req.body.idpersona,
        rol: req.body.rol,
        user: req.body.user,
        password:  bcrypt.hashSync(req.body.password)
    });
    await user.save();
    res.json({status: 'User created'});
};

userCtrl.getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
};

userCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const user = {
        idpersona: req.body.idpersona,
        rol: req.body.rol,
        user: req.body.user,
        password:  bcrypt.hashSync(req.body.password)
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'User Updated'});
};

userCtrl.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
};


userCtrl.loginUser = (req, res, next) => {
    const userData = {
        user: req.body.user,
        password: req.body.password
    }

    User.findOne({ user: userData.user }, (err, user) => {
        if (err) return res.status(500).send('error en servidor');
        if (!user) {
            //email does not exist
            res.status(409).send({ message: 'somthing is worng' });

        } else {
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accesToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                    expiresIn: expiresIn
                });
                const dataUser = {
                    user: user.user,
                    rol:user.rol,
                    accesToken: accesToken,
                    expiresIn: expiresIn
                }
                res.send({ dataUser })
            } else {
                //paswword wrong
                res.status(409).send({ message: "error de password" });
            }
        }
    })

}
module.exports = userCtrl;