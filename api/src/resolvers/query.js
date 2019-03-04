import { getUserId } from '../utils'

const Query = {
  async me (parent, args, { prisma, request }, info) {
    const userId = await getUserId(request)
    return prisma.query.user({
      where: {
        id: userId
      }
    })
  },
  users (parent, args, { prisma }, info) {
    return prisma.query.users({}, info)
  }  
}

export { Query as default }