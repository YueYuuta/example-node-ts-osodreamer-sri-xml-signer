import { XmlProccesController } from "./controller/xml-proccess.controller";
import { XmlProccessService } from "./services/xml-proccess.service";

async function bootstrap() {
  const service = new XmlProccessService();
  const controller = new XmlProccesController(service);

  try {
    await controller.execute();
  } catch (error) {
    console.error("❌ Error al generar el XML:", error);
  }
}

bootstrap();
