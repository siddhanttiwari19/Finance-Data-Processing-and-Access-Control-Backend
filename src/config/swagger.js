const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Backend API",
      version: "1.0.0",
      description: "Finance Data Processing and Access Control API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],

    // 🔐 ADD THIS (VERY IMPORTANT)
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    // 🔐 APPLY SECURITY GLOBALLY
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./src/routes/*.js"], // where your swagger comments are
};

const swaggerSpec = swaggerJsDoc(options);

// ✅ EXPORT BOTH
module.exports = { swaggerUi, swaggerSpec };