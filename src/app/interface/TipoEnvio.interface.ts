// Generated by https://quicktype.io

export interface ResultTipoEnvio {
    ok:        boolean;
    msg:       string;
    tipoenvio: Tipoenvio[];
}

export interface Tipoenvio {
    id:     number;
    codigo: string;
    nombre: string;
}
