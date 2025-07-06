# 📄 Ejemplo de uso — osodreamer-sri-xml-signer

Este repositorio demuestra cómo implementar de forma real la librería [`osodreamer-sri-xml-signer`](https://www.npmjs.com/package/osodreamer-sri-xml-signer) para firmar electrónicamente comprobantes XML en Ecuador conforme a las normativas del SRI.

Incluye todo el flujo completo:

- ✅ Generación de XML tipo factura
- 🔏 Firma digital con certificado `.p12`
- 🧪 Validación contra servicios del SRI
- 🧾 Autorización y guardado del comprobante

---

## 🚀 Requisitos

- Node.js `>=18`
- Certificado digital `.p12` (puedes usar el de ejemplo que viene)
- Acceso a internet (para validar/autorizar con el SRI)

---

## 📦 Instalación

```bash
git clone https://github.com/YueYuuta/example-node-ts-osodreamer-sri-xml-signer.git
cd example-node-ts-osodreamer-sri-xml-signer
npm install
npm run dev
```
