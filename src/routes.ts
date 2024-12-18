import z from "zod";
import { FastifyTypeInstance } from "./types";
import { GetUsersController } from "controller/GetUsersController";

export async function routes(app: FastifyTypeInstance) {
  app.get("/users", {
    schema: {
      tags: ["users"],
      description: "List users",
      response: {
        200: z.array(z.object({
          id: z.string(),
          name: z.string(),
          email: z.string()
        }))
      }
    }
  }, (req, res) => {
    return new GetUsersController().handle(req, res);
  });
  
  // app.get("/users/:id", {
  //   schema: {
  //     tags: ["users"],
  //     description: "List unique user",
  //     params: z.object({
  //       id: z.string()
  //     }),
  //     response: {
  //       200: z.object({
  //         id: z.string(),
  //         name: z.string(),
  //         email: z.string()
  //       })
  //     }
  //   }
  // }, async (req, res) => {
  //   const { id } = req.params
  //   const user = users.filter(user => user.id === id)[0];
  //   return res.status(200).send(user);
  // });

  // app.post("/users", {
  //   schema: {
  //     tags: ["users"],
  //     description: "Create new user",
  //     body: z.object({
  //       name: z.string(),
  //       email: z.string().email(),
  //     }),
  //     response: {
  //       201: z.null().describe("User created")
  //     }
  //   }
  // }, async (req, res) => {
  //   const { name, email } = req.body
  //   return res.status(201).send()
  // });
}
