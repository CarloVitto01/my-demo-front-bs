import tecnico from "./TecnicoModel";
import cliente from "./ClienteModel";

interface Segnalazioni {
    id?: number,
    description: string,
    date: Date,
    cliente: cliente,
    tecnico: tecnico,
}

export default Segnalazioni;