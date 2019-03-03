import bcrypt from 'bcryptjs'
import { generateToken } from '../utils'

const Mutation = {
  async login (parent, { data }, { prisma }, info ) {
    const errorMessage = 'Unable to login'
    const user = await prisma.query.user({
      where: {
        email: data.email
      }
    })
    if (!user) {
      throw new Error(errorMessage)
    }
    const isMatch = await bcrypt.compare(data.password, user.password)
    if (!isMatch) {
      throw new Error(errorMessage)
    }

    return {
      user,
      token: generateToken(user.id)
    }
  }
}

export { Mutation as default }