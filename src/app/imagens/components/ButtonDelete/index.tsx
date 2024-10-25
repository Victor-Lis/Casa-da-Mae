import { FiTrash2 } from 'react-icons/fi'

export default function ButtonDelete() {
  return (
    <button
      type="button"
      className="absolute top-2 left-2 bg-red-600 p-2 text-white rounded hover:opacity-85 hover:duration-150"
    >
      <FiTrash2 color="#fff" size={20} />
    </button>
  )
}
