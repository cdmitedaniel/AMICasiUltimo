export class Publicacionley {

    constructor(_id = '', titulo = '', descripcion ='', fechaPublicacion='', likesTotal='', idley = '', idarticulo='', dislikesTotales = '') {
       
       
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaPublicacion = fechaPublicacion;
        this.likesTotal = likesTotal;
        this.idley = idley;
        this.idarticulo = idarticulo;
        this.dislikesTotales = dislikesTotales;


    }

    _id: string;
    titulo:string;
    descripcion:string;
    fechaPublicacion:string;
    likesTotal:string;
    idley:string;
    idarticulo:string;
    dislikesTotales:string;
    
}