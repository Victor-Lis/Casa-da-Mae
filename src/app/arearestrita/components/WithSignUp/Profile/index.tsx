import type { UserProps } from '@/@types/User'
import ButtonLogOut from '../LogOut'
import StyledBox from '../../StyledBox'

export default function Profile({ user }: { user: UserProps }) {
  return (
    <StyledBox>
      <h1 className="text-white text-5xl w-full text-center font-bold mb-8 max-sm:text-3xl">
        Perfil
      </h1>
      <div className="w-full flex justify-start items-center gap-x-2 mb-4 max-sm:flex-col max-sm:items-start">
        <h3 className="text-white text-3xl text-left font-bold max-sm:text-xl">
          Nome:
        </h3>
        <h3 className="text-white text-2xl text-left max-sm:text-xl">
          {user.name}
        </h3>
      </div>
      <div className="w-full flex justify-start items-center gap-x-2 mb-8 max-sm:flex-col max-sm:items-start overflow-x-hidden">
        <h3 className="text-white text-3xl text-left font-bold max-sm:text-xl">
          Email:
        </h3>
        <h3 className="text-white text-2xl text-left max-sm:text-xl">
          {user.email}
        </h3>
      </div>
      <ButtonLogOut />
    </StyledBox>
  )
}
