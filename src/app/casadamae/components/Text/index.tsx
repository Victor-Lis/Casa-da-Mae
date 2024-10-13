export default function Text({ text }: { text: string[] }) {
  return (
    <div className="pt-10 pb-20 w-full bg-tertiary">
      {text?.map(paragraph => {
        return (
          <p
            key={paragraph}
            className="w-9/12 max-sm:text-xl sm:text-3xl mt-10 mx-auto text-justify"
          >
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}
