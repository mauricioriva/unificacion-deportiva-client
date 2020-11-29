export class Torneo {
    id: number;
    id_categoria: number;
    nombre_torneo: string;
    fecha_inicio: Date;
    estatus: number;

    constructor(id, id_categoria, nombre_torneo, fecha_inicio, estatus){
        this.id = id;
        this.id_categoria = id_categoria;
        this.nombre_torneo = nombre_torneo;
        this.fecha_inicio = fecha_inicio;
        this.estatus = estatus;
    }
    
}