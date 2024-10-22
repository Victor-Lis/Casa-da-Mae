import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

import NoSignUp from './components/NoSignUp'
import WithSignUp from './components/WithSignUp'

export default async function arearestrita() {
  const session = await getServerSession(authOptions)

  return (
    <div className="w-full bg-secondary">
      {session?.user ? <WithSignUp /> : <NoSignUp />}
    </div>
  )
}
