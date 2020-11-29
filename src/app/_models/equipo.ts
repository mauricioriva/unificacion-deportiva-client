export class Equipo {
    id: number;
    id_categoria: number;
    nombre_equipo: string;
    color_playera: string;
    color_short: string;
    logo: string;
    grupo: number;
    estatus: number;
    archivo_registros: string;

    constructor(id, id_categoria, nombre_equipo, color_playera, color_short, logo, grupo, estatus, archivo_registros){
        this.id = id;
        this.id_categoria = id_categoria;
        this.nombre_equipo = nombre_equipo;
        this.color_playera = color_playera;
        this.color_short = color_short;
        this.logo = logo;
        this.grupo = grupo;
        this.estatus = estatus;
        this.archivo_registros = archivo_registros;
    }

}