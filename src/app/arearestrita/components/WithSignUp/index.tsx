import type { UserProps } from '@/@types/User'

import Profile from './Profile'
import { Courses } from './Courses/page'

export default function WithSignUp({ user }: { user: UserProps }) {
  return (
    <div className="w-full flex flex-col justify-center items-center flex-wrap py-10 gap-y-10">
      <Profile user={user} />
      <Courses email={user.email as string} />
    </div>
  )
}
