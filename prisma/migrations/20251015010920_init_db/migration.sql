-- CreateTable
CREATE TABLE "conteudos" (
    "id" BIGSERIAL NOT NULL,
    "edited_at" TIMESTAMPTZ(6) NOT NULL,
    "descricao" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    "tipo_de_midia" TEXT NOT NULL,

    CONSTRAINT "conteudos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscricoes" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "nome_do_curso" TEXT NOT NULL,
    "aluno" TEXT NOT NULL,
    "status_aprovacao" BOOLEAN NOT NULL,

    CONSTRAINT "inscricoes_pkey" PRIMARY KEY ("id")
);
