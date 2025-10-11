"use client";

import { PostType } from "@/@types/PostType";
import { deletePageContent } from "../utils/handle-delete-content";

export default function EditOptions({ post }: { post: PostType }) {
  const handleDelete = () => {
    deletePageContent({ id: post.id }).then((deletedPosts) => {
      if (deletedPosts.length) {
        alert("Post excluido.");
        window.location.reload();
      }
    });
  };

  return (
    <div className="flex items-center justify-end gap-4 p-4 bg-gray-50">
      {/* <button
        aria-label="Editar post"
        className="text-gray-500 transition-colors duration-200 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
          />
        </svg>
      </button> */}
      <button
        aria-label="Excluir post"
        className="text-gray-500 transition-colors duration-200 hover:text-red-600"
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
