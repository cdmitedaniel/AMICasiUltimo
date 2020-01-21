export class User {

    constructor(_id = '', idpersona = '', rol = '', user = '', password = '') {
        this._id = _id;
        this.idpersona = idpersona;
        this.rol = rol;
        this.user = user;
        this.password = password;
    }

    _id: string;
    idpersona:string;
    rol: string;
    user: string;
    password: string;
}
