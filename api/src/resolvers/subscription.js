const Subscription = {
  user: {
    async subscribe (parent, data, { prisma }, info) {
      return await prisma.subscription.user({}, info)
    }
  }
}

export { Subscription as default }