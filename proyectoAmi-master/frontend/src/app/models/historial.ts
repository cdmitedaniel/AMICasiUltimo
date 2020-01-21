export class Historial {

    constructor(_id = '', iduser = '', idley = '', fecha_publicacion = '', detalle = '', estado = '', expl_estado = '') {
        this._id = _id;
        this.iduser = iduser;
        this.idley = idley;
        this.fecha_publicacion = fecha_publicacion;
        this.detalle = detalle;
        this.estado = estado;
        this.expl_estado = expl_estado;
    }

    _id: string;
    iduser : string;
    idley : string;
    fecha_publicacion: string;
    detalle: string;
    estado: string;
    expl_estado: string;

}
