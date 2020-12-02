export class Partido {
    id: number;
    id_torneo: number;
    id_cancha: number;
    id_equipo_local: number;
    id_equipo_visita: number;
    horario_partido: Date;
    goles_local: number;
    goles_visita: number;
    jornada: number;
    estado: string;
    estatus: number;

    constructor(id,id_torneo,id_cancha,id_equipo_local,id_equipo_visita,
        horario_partido,goles_local,goles_visita,jornada,estado,estatus){
        this.id = id;
        this.id_torneo = id_torneo;
        this.id_cancha = id_cancha;
        this.id_equipo_local = id_equipo_local;
        this.id_equipo_visita = id_equipo_visita;
        this.horario_partido = horario_partido;
        this.goles_local = goles_local;
        this.goles_visita = goles_visita;
        this.jornada = jornada;
        this.estado = estado;
        this.estatus = estatus;
    }
    
    /**
     * Verifica si el horario es valido entre 7am y 9pm
     *
     * @returns {boolean}
     * @memberof Partido
     */
    horarioValido(): boolean {
        var hora = this.horario_partido.getHours();
        if (hora < 7 || hora > 21)
            return false;
        return true;
    }

}