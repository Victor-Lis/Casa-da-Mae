import SubmitForm from './components/SubmitForm'

export default function AdminUsers({ curso }: { curso: string }) {
  return (
    <div className="mt-10 w-full flex justify-center items-center">
      <SubmitForm curso={curso} />
    </div>
  )
}
