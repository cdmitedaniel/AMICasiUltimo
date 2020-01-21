export class Interaccion {

    constructor(_id = '', idusuario = '', idley = '', likes = '', comentariostotales = '', compartidastotales = '') {
        this._id = _id;
        this.idusuario = idusuario;
        this.idley = idley;
        this.likes = likes;
        this.comentariostotales = comentariostotales;
        this.compartidastotales = compartidastotales;
        
    }

    _id: string;
    idusuario: string;
    idley: string;
    likes: string;
    comentariostotales: string;
    compartidastotales: string;
  
}
