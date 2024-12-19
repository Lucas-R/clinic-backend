import { FastifyReply, FastifyRequest } from "fastify"
import { CreateUserService } from "@services/CreateUserService"


class CreateUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const data = req.body as { name: string, email: string }
        const user = new CreateUserService().execute(data)

        return res.status(200).send(await user);
    }
}

export { CreateUserController }