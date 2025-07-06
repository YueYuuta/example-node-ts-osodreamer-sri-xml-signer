import {
  ComprobanteType,
  IDENTIFICATION_CODE_ENUM,
  OBLIGADO_CONTABILIDAD_ENUM,
  PAYMENT_METHOD_CODE_ENUM,
} from "osodreamer-sri-xml-signer";

export const comprobante: ComprobanteType = {
  infoTributaria: {
    ambiente: 1,
    razonSocial: "empleados de milagro",
    nombreComercial: "Empresa Importadora y Exportadora de Piezas",
    ruc: "0928548817001",
    estab: "001",
    ptoEmi: "001",
    secuencial: "000000261",
    dirMatriz: "Enrique Guerrero Portilla OE1-34 AV. Galo Plaza Lasso",
    // agenteRetencion: "1",
    // contribuyenteRimpe: "CONTRIBUYENTE RÉGIMEN RIMPE"
  },
  infoFactura: {
    fechaEmision: new Date(),
    dirEstablecimiento: "Sebastián Moreno S/N Francisco García",
    // contribuyenteEspecial: "sd3",
    obligadoContabilidad: OBLIGADO_CONTABILIDAD_ENUM.NO,
    tipoIdentificacionComprador: IDENTIFICATION_CODE_ENUM.CEDULA,
    razonSocialComprador: "PRUEBAS SERVICIO DE RENTAS INTERNAS",
    identificacionComprador: "0928548817",
    direccionComprador: "salinas y santiago",
    totalSinImpuestos: 100.0,
    totalDescuento: 0.0,
    totalConImpuestos: {
      totalImpuesto: [
        {
          codigo: 2,
          codigoPorcentaje: 4,
          baseImponible: 100.0,
          valor: 15.0,
        },
      ],
    },
    propina: 0.0,
    importeTotal: 115.0,
    moneda: "DOLAR",
    pagos: {
      pago: [
        {
          formaPago:
            PAYMENT_METHOD_CODE_ENUM.SIN_UTILIZACION_DEL_SISTEMA_FINANCIERO,
          total: 115.0,
          plazo: 0,
          unidadTiempo: "dias",
        },
      ],
    },
    valorRetIva: 0,
    valorRetRenta: 0,
  },
  detalles: {
    detalle: [
      {
        codigoPrincipal: "125BJC-01",
        codigoAuxiliar: "1234D56789-A",
        descripcion: "CAMIONETA 4X4 DIESEL 3.7",
        cantidad: 1.0,
        precioUnitario: 100.0,
        descuento: 0,
        precioTotalSinImpuesto: 100.0,
        // "detallesAdicionales": {detAdicional:[
        //   { "nombre": "Marca Chevrolet", "valor": "Chevrolet" },
        //   { "nombre": "Modelo", "valor": "2012" },
        //   { "nombre": "Chasis", "valor": "8LDETA03V20003289" }
        // ]},

        impuestos: {
          impuesto: [
            {
              codigo: 2,
              codigoPorcentaje: 4,
              tarifa: 15.0,
              baseImponible: 100.0,
              valor: 15.0,
            },
          ],
        },
      },
    ],
  },
  //   retenciones: {
  //     retencion: [{ codigo: 4, codigoPorcentaje: 3, tarifa: 1, valor: 2.0 }],
  //   },
  infoAdicional: {
    campoAdicional: [
      {
        nombre: "Codigo Impuesto ISD",
        value: "4580",
      },
      {
        nombre: "Impuesto ISD",
        value: "15.42x",
      },
    ],
  },
};
