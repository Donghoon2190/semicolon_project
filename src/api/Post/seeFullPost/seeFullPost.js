import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT, LIKE_FRAGMENT } from "../../../fragments";
export default {
    Query: {
        seeFullPost: async (_, args) => {
            const { id } = args;
            const post = await prisma.post({ id })
            const user = await prisma.post({ id }).user();
            const files = await prisma.post({ id }).files();
            const comment = await prisma.post({ id }).comments().$fragment(COMMENT_FRAGMENT);
            const likeUser = await prisma.post({ id }).likes().$fragment(LIKE_FRAGMENT);
            const likeCount = await prisma.likesConnection({ where: { post: { id } } }).aggregate().count();
            return { post, comment, likeCount, likeUser, user, files }
        }

    }
};


