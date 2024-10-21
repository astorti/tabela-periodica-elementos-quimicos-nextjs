const Card = ({
  simbolo, nome, anoDescoberta, cientista, massaMolar,
  numeroAtomico, eletrons, neutrons, raioAtomico, volumeAtomico,
  energiaIonizacao, eletronegatividade, densidade, pontoFusao,
  pontoEbulicao, periodo, familia, grupo, distribuicaoEletronica,
  estadoNatural, uso1, uso2, uso3
}) => {

  let mainCard = "flex justify-around w-4/5 border rounded border-white m-auto mt-28 mb-40";
  let symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-white-400 p-2 mb-5"
  let symbol = "font-overpass text-7xl text-center text-white-200"
  let line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-white-300"
  let line2 = "font-overpass mt-4 mb-2 border-b border-b-white-300"

  let colorCards = function () {
    if (grupo === "Hidrogênio") {
      mainCard = "flex justify-around w-4/5 border rounded border-lime-400 bg-lime-600 m-auto mt-28 mb-40"
      symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-lime-400 p-2 mb-5"
      symbol = "font-overpass text-7xl text-center text-lime-200"
      line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-lime-300"
      line2 = "font-overpass mt-4 mb-2 border-b border-b-lime-300"
    } else if (grupo === "actinídeos") {
        mainCard = "flex justify-around w-4/5 border rounded border-teal-600 bg-teal-400/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-teal-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-teal-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-teal-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-teal-300"
    } else if (grupo === "metais alcalinos") {
        mainCard = "flex justify-around w-4/5 border rounded border-yellow-600 bg-yellow-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-yellow-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-yellow-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-yellow-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-yellow-300"
    } else if (grupo === "metais alcalino-terrosos") {
        mainCard = "flex justify-around w-4/5 border rounded border-orange-600 bg-orange-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-orange-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-orange-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-orange-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-orange-300"
    } else if (grupo === "gases nobres") {
        mainCard = "flex justify-around w-4/5 border rounded border-purple-600 bg-purple-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-purple-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-purple-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-purple-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-purple-300"
    } else if (grupo === "halogênios") {
        mainCard = "flex justify-around w-4/5 border rounded border-fuchsia-400 bg-fuchsia-400/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-fuchsia-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-fuchsia-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-fuchsia-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-fuchsia-300"
    } else if (grupo === "metais pós-transição") {
        mainCard = "flex justify-around w-4/5 border rounded border-red-600 bg-red-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-red-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-red-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-red-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-red-300"
    } else if (grupo === "semimetais") {
        mainCard = "flex justify-around w-4/5 border rounded border-blue-600 bg-blue-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-blue-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-blue-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-blue-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-blue-300"
    } else if (grupo === "ametais") {
        mainCard = "flex justify-around w-4/5 border rounded border-emerald-600 bg-emerald-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-emerald-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-emerald-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-emerald-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-emerald-300"
    } else if (grupo === "lantanídeos") {
        mainCard = "flex justify-around w-4/5 border rounded border-amber-300 bg-amber-500 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-amber-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-amber-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-amber-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-amber-300"
    } else if (grupo === "metais de transição") {
        mainCard = "flex justify-around w-4/5 border rounded border-sky-300 bg-sky-400/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-sky-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-sky-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-sky-300"
        line2 = "font-overpass mt-4 mb-2 border-b border-b-sky-300"
    } else if (grupo === "") {
      mainCard = "flex justify-around w-4/5 border rounded border-zinc-400 bg-zinc-500 m-auto mt-28 mb-40"
      symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-zinc-400 p-2 mb-5"
      symbol = "font-overpass text-7xl text-center text-zinc-200"
      line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-zinc-300"
      line2 = "font-overpass mt-4 mb-2 border-b border-b-zinc-300"
    }
  }

  colorCards()

  return (
    <div className={mainCard}>
      <section className="flex flex-col justify-center">
        <div className={symbolCard}
        >
          <p className="font-overpass ">{numeroAtomico}</p>
          <p className={symbol}>{simbolo}</p>
          <p className="font-overpass text-center">{nome}</p>
        </div>

        <div>
          <div className="mb-2">
            <p className="font-overpass font-bold">Ano de Descoberta</p>
            <p className="font-overpass text-white/80 font-bold">{anoDescoberta}</p>
          </div>
          <div>
            <p className="font-overpass font-bold">Cientista</p>
            <p className="font-overpass text-white/80 font-bold w-48">{cientista}</p>
          </div>
        </div>    
      </section>

      <div>
        <p className={line1}>Propriedades</p>
        <div className="flex mt-5 mb-10">
          <section className="mr-10">
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Número Atômico:</p>
              <p className="text-white/60 font-overpass font-bold">{numeroAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Massa Molar:</p>
              <p className="text-white/60 font-overpass font-bold">{massaMolar}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Número de Neutrons:</p>
              <p className="text-white/60 font-bold">{neutrons}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Número de Elétrons:</p>
              <p className="text-white/60 font-overpass font-bold">{eletrons}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Período: </p>
              <p className="text-white/60 font-overpass font-bold">{periodo}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Família: </p>
              <p className="text-white/60 font-overpass font-bold">{familia}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Grupo: </p>
              <p className="text-white/60 font-bold">{grupo}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-bold">Estado Natural: </p>
              <p className="text-white/60 font-overpass font-bold">{estadoNatural}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Ponto Ebulição: </p>
              <p className="text-white/60 font-overpass font-bold">{pontoEbulicao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Ponto Fusão: </p>
              <p className="text-white/60 font-overpass font-bold">{pontoFusao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Densidade: </p>
              <p className="text-white/60 font-overpass font-bold">{densidade}</p>
            </div>
          </section>
          <section>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Raio Atômico: </p>
              <p className="text-white/60 font-overpass font-bold">{raioAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Volume Atômico: </p>
              <p className="text-white/60 font-overpass font-bold">{volumeAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Eletronegatividade: </p>
              <p className="text-white/60 font-overpass font-bold">{eletronegatividade}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Energia de Ionização: </p>
              <p className="text-white/60 font-overpass font-bold">{energiaIonizacao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold">Distribuição Eletônica: </p>
              <p className="text-white/60 font-overpass font-bold">{distribuicaoEletronica}</p>
            </div>

            <section>
              <p className={line2}>Principais usos</p>
              <section>
                <div className="flex">
                  <p className="w-5 font-overpass font-bold">1:</p>
                  <p className="text-white/60 font-overpass font-bold">{uso1}</p>
                </div>
                <div className="flex">
                  <p className="w-5 font-overpass font-bold">2:</p>
                  <p className="text-white/60 font-overpass font-bold">{uso2}</p>
                </div>
                <div className="flex">
                  <p className="w-5 font-overpass font-bold">3:</p>
                  <p className="text-white/60 font-overpass font-bold">{uso3}</p>
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
