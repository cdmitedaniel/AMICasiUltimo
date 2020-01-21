export class Rol {

    constructor(_id = '', idpersona = '',descripcionrol = '') {
        this._id = _id;
        this.idpersona = idpersona;
        this.descripcionrol = descripcionrol;
        
    }

    _id: string;
    idpersona: string;
    descripcionrol: string;
    
}
