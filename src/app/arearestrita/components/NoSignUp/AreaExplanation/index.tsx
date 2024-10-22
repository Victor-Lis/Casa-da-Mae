export default function AreaExplanation() {
  return (
    <div className="flex flex-col justify-center items-center bg-tertiary gap-y-4 px-5 py-10 rounded mx-4 max-w-3xl">
      <h1 className="text-3xl text-white font-bold text-center mb-2">
        Área Restrita
      </h1>
      <h2 className="text-xl text-white text-justify">
        A área restrita é onde você pode ver informações da sua conta e os
        cursos liberados para você
      </h2>
      <h2 className="text-xl text-white text-justify">
        Para ser possível mostrar as informações sobre você, é necessário que
        você realize seu login
      </h2>
      <h2 className="text-xl text-white text-justify">
        <strong>Obs:</strong> Caso você tenha se inscrito para um curso e queira
        ver se foi aceito, faça login utilizando o gmail que você colocou na
        ficha de inscrição
      </h2>
    </div>
  )
}
