// Generated by https://quicktype.io

export interface ResultRespuestaTramite {
    ok:        boolean;
    respuesta: Respuesta[];
}

export interface Respuesta {
    id:         number;
    codigo:     string;
    nombre:     string;
    habilitado: number;
}