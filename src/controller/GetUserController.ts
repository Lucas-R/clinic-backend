
import { GetUserService } from "@services/GetUserService"
import { FastifyReply, FastifyRequest } from "fastify"


class GetUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.params as { id: string }
        const user = new GetUserService().execute(id)

        return res.status(200).send(await user);
    }
}

export { GetUserController }