// Generated by https://quicktype.io

export interface ResultAnexoPDF {
    ok:    boolean;
    msg:   string;
    anexo: Anexo[];
}

export interface Anexo {
    id:          number;
    idDocumento: number;
    archivo:     string;
}
