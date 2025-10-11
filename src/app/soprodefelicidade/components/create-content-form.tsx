"use client";

import React from "react";
import { useForm } from "react-hook-form";
import type { PostType } from "../../../@types/PostType";
import { Input } from "../../../components/input";
import { createPageContent } from "../utils/handle-create-content";

type FormData = Omit<PostType, "id" | "createdAt">;

interface CreateContentFormProps {
  defaultValues?: Partial<FormData>;
  contentType: PostType["page"];
}

export default function CreateContentForm({
  defaultValues,
  contentType,
}: CreateContentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ defaultValues: defaultValues as any });

  const submit = async (data: FormData) => {
    // await onSubmit(data)
    createPageContent({ post: { ...data, page: contentType } }).then((createdPosts) => {
      if (createdPosts.length) {
        alert("Conteúdo criado com sucesso.");
        window.location.reload();
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`w-full max-w-3xl bg-white p-4 rounded-md shadow-sm`}
    >
      <div className="mb-4">
        <Input
          name="title"
          type="text"
          placeholder="Título do conteúdo"
          register={register}
          rules={{ required: "Título é obrigatório" }}
          error={errors.title?.message as string | undefined}
          title="Título"
        />
      </div>

      <div className="mb-4">
        <h1 className="mr-auto text-xl text-blue-500 font-bold mt-5">
          Conteúdo
        </h1>
        <textarea
          id="content"
          className="w-full min-h-[160px] border-2 rounded-md p-2 bg-zinc-100"
          placeholder="Escreva o conteúdo aqui..."
          {...register("content", { required: "Conteúdo é obrigatório" })}
        />
        {errors.content && (
          <p className="text-red-500 my-1">{errors.content.message}</p>
        )}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button
          type="submit"
          className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          Salvar
        </button>

        <button
          type="button"
          onClick={() => {
            // simples comportamento de reset local — o usuário pode controlar via defaultValues
            // não resetamos para evitar perda de dados sem intenção
          }}
          className="px-4 py-2 rounded-md bg-zinc-200 text-zinc-900 hover:opacity-90"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
