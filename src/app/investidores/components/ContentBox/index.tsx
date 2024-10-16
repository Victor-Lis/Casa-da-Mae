import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type ContentBoxProps = {
  titleImage?: StaticImageData
  titleType: 'ContentBox' | 'External' | 'NoTitle'
  title: string | React.ReactNode
  content: string[]
}

export default function ContentBox({
  titleImage,
  titleType,
  title,
  content,
}: ContentBoxProps) {
  if (titleType === 'ContentBox' || titleType === 'NoTitle') {
    return (
      <div
        className={`bg-primary max-sm:w-11/12 w-10/12 px-6 ${title ? 'pb-4 pt-3' : 'py-8'} mx-auto flex flex-col items-center justify-center gap-y-6 rounded mt-4`}
      >
        {titleType === 'ContentBox' && (
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

  return (
    <div className="flex flex-col justify-center items-center max-sm:w-11/12 w-10/12 mx-auto">
      <div className="flex justify-center items-center px-4 py-2 bg-secondary text-3xl mr-auto rounded gap-x-3">
        {titleImage && (
          <Image src={titleImage} alt={`${title} Image`} className="w-10" />
        )}
        <h1>{title}</h1>
      </div>
      <div
        className={`bg-primary w-full px-6 ${title ? 'pb-4 pt-3' : 'py-8'} flex flex-col items-center justify-center gap-y-6 rounded mt-4`}
      >
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
    </div>
  )
}
