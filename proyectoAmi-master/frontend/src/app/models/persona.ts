export class Persona {

    constructor(_id = '', nombre = '', apellido = '', cedula = '', fecha_nacimiento = '', lugar_nacimiento = '', correo = '', sexo = '', domicilio = '') {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.fecha_nacimiento = fecha_nacimiento;
        this.lugar_nacimiento = lugar_nacimiento;
        this.correo = correo;
        this.sexo = sexo;
        this.domicilio = domicilio;
    }

    _id: string;
    nombre: string;
    apellido: string;
    cedula: string;
    fecha_nacimiento: string;
    lugar_nacimiento: string;
    correo: string;
    sexo: string;
    domicilio: string;
}
