import z from "zod";
import { FastifyTypeInstance } from "./types";
import { GetUsersController } from "controller/GetUsersController";
import { CreateUserController } from "controller/CreateUserController";
import { GetUserController } from "controller/GetUserController";
import { DeleteUserController } from "controller/DeleteUserController";
import { Timestamp } from "firebase/firestore";
import { UpdateUserController } from "controller/UpdateUserController";

export async function routes(app: FastifyTypeInstance) {
  app.get("/users", {
    schema: {
      tags: ["users"],
      description: "List all users",
      response: {
        200: z.array(z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
          created_at: z.custom<Timestamp>((value) => value instanceof Timestamp),
          updated_at: z.custom<Timestamp>((value) => value instanceof Timestamp).or(z.null())
        }))
      }
    }
  }, (req, res) => {
    return new GetUsersController().handle(req, res);
  });
  
  app.get("/users/:id", {
    schema: {
      tags: ["users"],
      description: "List unique user",
      params: z.object({
        id: z.string()
      }),
      response: {
        200: z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
          created_at: z.custom<Timestamp>((value) => value instanceof Timestamp),
          updated_at: z.custom<Timestamp>((value) => value instanceof Timestamp).or(z.null())
        })
      }
    }
  }, async (req, res) => {
    return new GetUserController().handle(req, res);
  });

  app.post("/users", {
    schema: {
      tags: ["users"],
      description: "Create new user",
      body: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
      response: {
        201: z.null().describe("User created")
      }
    }
  }, async (req, res) => {
    return new CreateUserController().handle(req, res)
  });

  app.delete("/users/:id", {
    schema: {
      tags: ["users"],
      description: "Delete user",
      params: z.object({
        id: z.string()
      }),
      response: {
        204: z.null().describe("User Deleted")
      }
    }
  }, async (req, res) => {
    return new DeleteUserController().handle(req, res);
  });

  app.put("/users/:id", {
    schema: {
      tags: ["users"],
      description: "Edit user",
      params: z.object({
        id: z.string()
      }),
      response: {
        200: z.null().describe("User updated")
      }
    }
  }, async (req, res) => {
    return new UpdateUserController().handle(req, res);
  });
}
