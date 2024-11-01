import type { ImageType } from '@/@types/ImageType'
import { supabase } from '.'

export async function getImages({ dir }: { dir: string }) {
  const URLs: ImageType[] = []
  const { data: imagesFromBucket } = await supabase.storage
    .from('arquivos')
    .list(dir)

  imagesFromBucket?.map(async image => {
    const url = await supabase.storage
      .from('arquivos')
      .getPublicUrl(`${dir}/${image.name}`)

    if (url.data)
      URLs.push({
        id: image.name,
        url: url.data.publicUrl,
      })
  })

  return URLs
}
