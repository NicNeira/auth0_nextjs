module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "@next/next/no-html-link-for-pages": "off", // Desactiva la regla para <a> en rutas
    "@typescript-eslint/no-explicit-any": "off", // Permite el uso de 'any' en TypeScript
  },
};
