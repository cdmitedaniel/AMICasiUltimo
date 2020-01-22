const User = require('../models/user');
const authCtrl = {};
 
authCtrl.login = async (req, res) => {
        
    let user = await User.findOne({user: req.body.user});
    if(user){
        if(user.password == req.body.password){
            res.json(user);
        } else {
            res.json(401, {
                'status': 'Login failed, User or Password Wrong'
            });
        }
    }
    else { 
        res.json(401, {
            'status': 'Login failed, User not registered'
        });
    }
};


  

module.exports = authCtrl;
