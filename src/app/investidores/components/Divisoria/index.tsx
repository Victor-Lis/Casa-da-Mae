import DivisoriaImage from '@/assets/divisoria.png'
import Image from 'next/image'

export default function Divisoria() {
  return (
    <div className="w-full mx-auto my-5 flex justify-evenly overflow-hidden">
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
      <Image src={DivisoriaImage} className="rotate-90 w-10" alt="Divisória" />
    </div>
  )
}
