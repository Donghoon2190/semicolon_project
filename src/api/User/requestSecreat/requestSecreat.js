import { prisma } from "../../../../generated/prisma-client";
import { generateSecret } from "../../../utils";
import { sendSecretMail } from "../../../utils";
export default {
    Mutation: {
        requestSecret: async (_, args, { request }) => {
            console.log(request.user);
            const { email } = args;
            const loginSecreat = generateSecret();
            try {
                await sendSecretMail(email, loginSecreat);
                await prisma.updateUser({ data: { loginSecreat }, where: { email } });
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }

        },
    }
};