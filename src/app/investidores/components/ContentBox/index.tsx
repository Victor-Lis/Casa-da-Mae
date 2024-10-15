export default function ContentBox({
  title,
  content,
}: { title?: string; content: string[] }) {
  return (
    <div
      className={`bg-primary max-sm:w-11/12 w-10/12 px-6 ${title ? 'pb-4 pt-3' : 'py-8'} mx-auto flex flex-col items-center justify-center gap-y-6 rounded mt-4`}
    >
      {title && (
        <h1 className="w-full max-sm:text-xl text-3xl font-bold text-white">
          {title}
        </h1>
      )}
      {content?.map(paragraph => {
        return (
          <p
            key={paragraph}
            className="text-white text-center max-sm:text-base text-xl"
          >
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}
