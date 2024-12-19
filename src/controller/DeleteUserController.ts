import { FastifyReply, FastifyRequest } from "fastify"
import { DeleteUserService } from "@services/DeleteUserService"

class DeleteUserController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.params as { id: string }
        const del = new DeleteUserService().execute(id)

        return res.status(204).send(await del);
    }
}

export { DeleteUserController }