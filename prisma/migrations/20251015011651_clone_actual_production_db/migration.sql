/*
  Warnings:

  - Changed the type of `tipo_de_midia` on the `conteudos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoDeMidia" AS ENUM ('pdf', 'video', 'imagem', 'enum');

-- AlterTable
ALTER TABLE "conteudos" DROP COLUMN "tipo_de_midia",
ADD COLUMN     "tipo_de_midia" "TipoDeMidia" NOT NULL;
