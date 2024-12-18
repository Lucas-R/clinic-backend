import { config } from "dotenv"
import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { fastifySwagger } from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import { 
  validatorCompiler, 
  serializerCompiler, 
  ZodTypeProvider, 
  jsonSchemaTransform 
} from "fastify-type-provider-zod"
import { routes } from "./routes"

config()

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, { origin: "*" })
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "API Tipada",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform
})
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
})
app.register(routes)

app.listen({ port: Number(process.env.APP_PORT) || 8888 }).then(() => {
  console.log("HTTP server running")
})
