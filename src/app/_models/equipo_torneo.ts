export class EquipoTorneo {
    id_equipo: number;
    id_torneo: number;

    constructor(id_equipo,id_torneo){
        this.id_equipo = id_equipo;
        this.id_torneo = id_torneo;
    }

    /**
     * Te dice si el equipo pertenece al mismo torneo que el otro
     *
     * @param {*} equipo
     * @returns
     * @memberof EquipoTorneo
     */
    mismoTorneo(equipoTorneo: EquipoTorneo): boolean {
        return this.id_torneo == equipoTorneo.id_torneo;
    }

}