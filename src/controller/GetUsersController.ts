import { GetUsersService } from "@services/GetUsersService";
import { FastifyReply, FastifyRequest } from "fastify";


class GetUsersController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const users = new GetUsersService().execute();

        return res.status(200).send(await users);
    }
}

export { GetUsersController }