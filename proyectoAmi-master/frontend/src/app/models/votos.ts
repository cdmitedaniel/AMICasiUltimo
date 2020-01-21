export class Votos {

    constructor(_id = '', iduser = '', idarticulo = '', fecha_votacion = '', voto = '', ciudadano = '') {
        this._id = _id;
        this.iduser = iduser;   
        this.idarticulo = idarticulo;
        this.fecha_votacion = fecha_votacion;
        this.voto = voto;
        this.ciudadano = ciudadano;
    }

    _id: string;
    iduser : string;
    idarticulo : string;
    fecha_votacion: string;
    voto: string;
    ciudadano: string;
    
}
