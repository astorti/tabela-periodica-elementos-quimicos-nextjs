const Card = ({
  simbolo, nome, anoDescoberta, cientista, massaMolar,
  numeroAtomico, eletrons, neutrons, raioAtomico, volumeAtomico,
  energiaIonizacao, eletronegatividade, densidade, pontoFusao,
  pontoEbulicao, periodo, familia, grupo, distribuicaoEletronica,
  estadoNatural, uso1, uso2, uso3
}) => {
  return (
    <div className="flex justify-around w-4/5 border rounded 
                  border-cyan-400 bg-cyan-200/40 m-auto mt-28 mb-40">
      <section className="flex flex-col justify-center">
        <div className="flex flex-col w-32 h-40 border justify-around
                  rounded border-cyan-400 p-2 mb-5"
        >
          <p>{numeroAtomico}</p>
          <p className="text-7xl text-center text-cyan-200">{simbolo}</p>
          <p className="text-center">{nome}</p>
        </div>

        <div>
          <div className="mb-2">
            <p className="font-bold">Ano de Descoberta</p>
            <p className="text-white/80 font-bold">{anoDescoberta}</p>
          </div>
          <div>
            <p className="font-bold">Cientista</p>
            <p className="text-white/80 font-bold w-48">{cientista}</p>
          </div>
        </div>    
      </section>

      <div>
        <p className="text-xl font-bold mt-10 border-b border-b-cyan-300">Propriedades</p>
        <div className="flex mt-5 mb-10">
          <section className="mr-10">
            <div className="flex justify-between">
              <p className="w-48 font-bold">Número Atômico:</p>
              <p className="text-white/60 font-bold">{numeroAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Massa Molar:</p>
              <p className="text-white/60 font-bold">{massaMolar}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Número de Neutrons:</p>
              <p className="text-white/60 font-bold">{neutrons}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Número de Elétrons:</p>
              <p className="text-white/60 font-bold">{eletrons}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Período: </p>
              <p className="text-white/60 font-bold">{periodo}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Família: </p>
              <p className="text-white/60 font-bold">{familia}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Grupo: </p>
              <p className="text-white/60 font-bold">{grupo}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Estado Natural: </p>
              <p className="text-white/60 font-bold">{estadoNatural}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Ponto Ebulição: </p>
              <p className="text-white/60 font-bold">{pontoEbulicao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Ponto Fusão: </p>
              <p className="text-white/60 font-bold">{pontoFusao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Densidade: </p>
              <p className="text-white/60 font-bold">{densidade}</p>
            </div>
          </section>
          <section>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Raio Atômico: </p>
              <p className="text-white/60 font-bold">{raioAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Volume Atômico: </p>
              <p className="text-white/60 font-bold">{volumeAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Eletronegatividade: </p>
              <p className="text-white/60 font-bold">{eletronegatividade}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Energia de Ionização: </p>
              <p className="text-white/60 font-bold">{energiaIonizacao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Distribuição Eletônica: </p>
              <p className="text-white/60 font-bold">{distribuicaoEletronica}</p>
            </div>

            <section>
              <p className="mt-4 mb-2 border-b border-b-cyan-300">Principais usos</p>
              <section>
                <div className="flex">
                  <p className="w-5 font-bold">1:</p>
                  <p className="text-white/60 font-bold">{uso1}</p>
                </div>
                <div className="flex">
                  <p className="w-5 font-bold">2:</p>
                  <p className="text-white/60 font-bold">{uso2}</p>
                </div>
                <div className="flex">
                  <p className="w-5 font-bold">3:</p>
                  <p className="text-white/60 font-bold">{uso3}</p>
                </div>
              </section>
            </section>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Card;
