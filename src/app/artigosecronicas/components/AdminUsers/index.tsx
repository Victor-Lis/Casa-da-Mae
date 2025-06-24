import SubmitForm from "./components/SubmitForm";

export default function AdminUsers() {
  return (
    <>
      <h2 className="mt-14 mb-5 text-5xl font-bold uppercase text-primary py-2 px-4 bg-white rounded max-sm:text-3xl">
        Área do Admin
      </h2>
      <div className="w-full flex justify-center items-start gap-10 flex-wrap">
        <SubmitForm />
      </div>
    </>
  );
}
