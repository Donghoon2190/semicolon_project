import { prisma } from "../../../../generated/prisma-client";
export default {
    Query: {
        userByid: async (_, args) => {
            const { id } = args;
            return await prisma.user({ id });
        }
    }
}