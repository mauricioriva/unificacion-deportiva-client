export class Cancha {
    id: number;
    id_categoria: number;
    nombre_cancha: string;
    domicilio_cancha: string;
    estatus: number;

    constructor(id, id_categoria, nombre_cancha, domicilio_cancha, estatus){
        this.id = id;
        this.id_categoria = id_categoria;
        this.nombre_cancha = nombre_cancha;
        this.domicilio_cancha = domicilio_cancha;
        this.estatus = estatus;
    }
    
}