// Generated by https://quicktype.io

export interface DetalleInternoResult {
  ok: boolean;
  detalle: Detalle[];
}

export interface Detalle {
  id: number;
  idDestino: number;
  fecha: string;
  codigoDocumento: string;
  observacion: string;
  idRespuesta: number;
  DestinoInterno: DestinoInterno;
  RespuestaTramite: RespuestaTramite;
  anexoDetalle?: Anexo[];
}

export interface DestinoInterno {
  id: number;
  codigoTramite: string;
  destinoArea: number;
  accion: string;
  atendido: number;
  estadoRecepcion: number;
}

export interface RespuestaTramite {
  id: number;
  codigo: string;
  nombre: string;
  habilitado: number;
}

// Generated by https://quicktype.io

export interface ResultAnexoDetalle {
  ok: boolean;
  anexo: Anexo[];
}

export interface Anexo {
  id: number;
  idDocumento: number;
  archivo: string;
}
