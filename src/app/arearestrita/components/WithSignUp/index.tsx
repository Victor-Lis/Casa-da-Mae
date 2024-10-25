import type { UserType } from '@/@types/User'
import { Courses } from './Courses'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

import Profile from './Profile'

import Inscriptions from './Admin/Inscriptions'
import Imagens from './Admin/Imagens'

export default async function WithSignUp() {
  const session = await getServerSession(authOptions)

  const user = session?.user as UserType
  return (
    <div className="w-full flex flex-col justify-center items-center flex-wrap py-10 gap-y-10">
      <Profile />
      <Courses />
      {user?.admin && <Inscriptions />}
      {user?.admin && <Imagens />}
    </div>
  )
}
