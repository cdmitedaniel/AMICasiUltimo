export class Ciudadano {

    constructor(_id = '', nombre = '', apellido = '', cedula = '', contrasena = '', cuentatwitter = '', cuentafacebook = '') {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.contrasena = contrasena;
 	this.cuentatwitter = cuentatwitter;
	this.cuentafacebook = cuentafacebook;
    }

    _id: string;
    nombre: string;
    apellido: string;
    cedula: string;
    contrasena: string;
    cuentatwitter: string;
    cuentafacebook: string;
}
