import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession, Session } from 'next-auth'

type UserSession = Session & { user?: { id?: string } }

export const useServerSession = async () => {
  const session: UserSession | null = await getServerSession(authOptions)

  return {
    ...session?.user
  }
}
