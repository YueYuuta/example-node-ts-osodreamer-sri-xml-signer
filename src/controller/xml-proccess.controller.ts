import { XmlProccessService } from "../services/xml-proccess.service";
import { comprobante } from "../consts/comprobante.const";
import * as fs from "fs";
import * as path from "path";

/**
 * Controlador responsable de generar, firmar, validar y autorizar un comprobante XML.
 * Esta clase sirve como ejemplo principal de uso de la librería de firmado SRI.
 */
export class XmlProccesController {
  private readonly baseDir = path.resolve(__dirname, "../../");
  private readonly inputDir = path.join(this.baseDir, "xml/generados");
  private readonly signedDir = path.join(this.baseDir, "xml/firmados");
  private readonly authorizedDir = path.join(this.baseDir, "xml/autorizados");
  private readonly p12Path = path.join(this.baseDir, "p12/tu-archivo.p12");
  private readonly password = "tu contraseña"; // ✅ Reemplazar por variable de entorno en producción

  constructor(private readonly _xmlProccessService: XmlProccessService) {}

  /**
   * Ejecuta el flujo completo:
   * 1. Generar XML
   * 2. Firmar XML
   * 3. Validar XML
   * 4. Autorizar comprobante
   */
  async execute(): Promise<void> {
    try {
      this.ensureDirectories([
        this.inputDir,
        this.signedDir,
        this.authorizedDir,
      ]);

      // === 1. Generar XML ===
      const { generatedXml, invoiceJson } =
        await this._xmlProccessService.generateXML(comprobante);
      const claveAcceso = invoiceJson.factura.infoTributaria.claveAcceso;
      const generatedPath = path.join(this.inputDir, `${claveAcceso}.xml`);
      this.writeFile(generatedPath, generatedXml);
      console.log(`📄 XML generado correctamente: ${generatedPath}`);

      // === 2. Firmar XML ===
      const signedXml = await this._xmlProccessService.signXML({
        p12Buffer: fs.readFileSync(this.p12Path),
        password: this.password,
        xmlBuffer: fs.readFileSync(generatedPath),
      });
      const signedPath = path.join(this.signedDir, `${claveAcceso}.xml`);
      this.writeFile(signedPath, signedXml);
      console.log(`🔏 XML firmado correctamente: ${signedPath}`);

      // === 3. Validar XML firmado ===
      const validationResult = await this._xmlProccessService.validateXML(
        fs.readFileSync(signedPath),
        "test"
      );
      console.log("✅ Validación completada:", validationResult);

      // === 4. Autorizar comprobante ===
      const authorization = await this._xmlProccessService.authorizeXML(
        claveAcceso,
        "test"
      );
      const authorizedPath = path.join(
        this.authorizedDir,
        `${claveAcceso}.xml`
      );
      this.writeFile(authorizedPath, authorization.comprobante);
      console.log(`🧾 Comprobante autorizado: ${authorizedPath}`);

      console.log("🎉 Proceso completado con éxito.");
    } catch (error) {
      console.error("❌ Error durante el proceso:", error);
    }
  }

  /**
   * Crea los directorios necesarios si aún no existen.
   */
  private ensureDirectories(dirs: string[]): void {
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  /**
   * Escribe el contenido en la ruta especificada.
   */
  private writeFile(filePath: string, content: string | Buffer): void {
    fs.writeFileSync(filePath, content);
  }
}
