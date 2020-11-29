export class Categoria {
    id: number;
    nombre_categoria: string;
    lunes: number;
    martes: number;
    miercoles: number;
    jueves: number;
    viernes: number;
    sabado: number;
    domingo: number;
    duracion_partidos: number;
    estatus: number;

    constructor(id,nombre_categoria,lunes,martes,miercoles,jueves,viernes,sabado,domingo,duracion_partidos,estatus){
        this.id = id;
        this.nombre_categoria = nombre_categoria;
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;
        this.sabado = sabado;
        this.domingo = domingo;
        this.duracion_partidos = duracion_partidos;
        this.estatus = estatus;
    }
    
}