import { defineConfig } from "@kubb/core";
import createSwagger from "@kubb/swagger";
import createSwaggerTS from "@kubb/swagger-ts";
import createSwaggerClient from "@kubb/swagger-client";

export default defineConfig(async () => {
  return {
    root: ".",
    input: {
      path: "./petstore.yml",
    },
    output: {
      path: "./src/gen",
      clean: true,
    },
    hooks: {
      done: ["prettier --write ./src"],
    },
    plugins: [
      createSwagger({ output: false, validate: false }),
      createSwaggerTS({ output: "models.ts" }),
      createSwaggerClient({ client: "src/client.ts", output: "requests.ts" }),
    ],
  };
});
