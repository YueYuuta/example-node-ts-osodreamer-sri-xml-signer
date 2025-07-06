import {
  generateXmlInvoice,
  signXml,
  validateXml,
  authorizeXml,
  SRIEnv,
  ComprobanteType,
  SignXmlRequest,
} from "osodreamer-sri-xml-signer";
export class XmlProccessService {
  async generateXML(invoice: ComprobanteType) {
    return await generateXmlInvoice(invoice);
  }
  async signXML(cmd: SignXmlRequest) {
    return await signXml(cmd);
  }
  async validateXML(xml: Uint8Array, env: SRIEnv) {
    return await validateXml({ xml, env });
  }

  async authorizeXML(claveAcceso: string, env: SRIEnv) {
    return await authorizeXml({ claveAcceso, env }); // "test" o "prod"
  }
}
