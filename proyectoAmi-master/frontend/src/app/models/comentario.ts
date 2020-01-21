export class Comentario {

    constructor(_id = '', idpublicacionley = '', like = '',dislike = '',comentarios = '') {
        this._id = _id;
        this.idpublicacionley = idpublicacionley;
        this.like = like;
        this.dislike = dislike;
        this.comentarios = comentarios;       
    }

    _id: string;
    idpublicacionley: string;
    like: string;
    dislike: string;
    comentarios:string;
  }