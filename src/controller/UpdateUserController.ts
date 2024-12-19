import { FastifyReply, FastifyRequest } from "fastify"
import { UpdateUserService } from "@services/UpdateUserService"

class UpdateUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.params as { id: string }
        const data = req.body
        const update = new UpdateUserService().execute(id, data)

        return res.status(200).send(await update)
    }
}

export { UpdateUserController }