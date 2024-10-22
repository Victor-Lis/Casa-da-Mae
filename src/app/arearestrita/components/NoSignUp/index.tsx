import AreaExplanation from './AreaExplanation'
import SignUpBox from './SignUpBox'

export default function NoSignUp() {
  return (
    <div className="w-full flex justify-center items-center flex-wrap py-10 gap-y-10">
      <AreaExplanation />
      <SignUpBox />
    </div>
  )
}
