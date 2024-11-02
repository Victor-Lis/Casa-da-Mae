import SubmitForm from './components/SubmitForm'
import VideoForm from './components/VideoForm'

export default function AdminUsers({ curso }: { curso: string }) {
  return (
    <>
      <h2 className="mt-14 mb-5 text-5xl font-bold uppercase text-primary py-2 px-4 bg-white rounded max-sm:text-3xl">
        Área do Admin
      </h2>
      <div className="w-full flex justify-center items-start gap-10 flex-wrap">
        <SubmitForm curso={curso} />
        <VideoForm curso={curso} />
      </div>
    </>
  )
}
