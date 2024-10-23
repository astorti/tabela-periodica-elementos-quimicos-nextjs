const Card = ({
  simbolo, nome, anoDescoberta, cientista, massaMolar,
  numeroAtomico, eletrons, neutrons, raioAtomico, volumeAtomico,
  energiaIonizacao, eletronegatividade, densidade, pontoFusao,
  pontoEbulicao, periodo, familia, grupo, distribuicaoEletronica,
  estadoNatural, uso1, uso2, uso3
}) => {

  let mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-white m-auto mt-28 mb-40";
  let symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-white-400 p-2 mb-5"
  let symbol = "font-overpass text-7xl text-center text-white-200"
  let line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-white-300 max-md:text-center max-md:text-lg"
  let line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-white-300 max-md:text-center"

  let colorCards = function () {
    if (grupo === "Hidrogênio") {
      mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-lime-400 bg-lime-600 m-auto mt-28 mb-40"
      symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-lime-400 p-2 mb-5"
      symbol = "font-overpass text-7xl text-center text-lime-200"
      line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-lime-300 max-md:text-center max-md:text-lg"
      line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-lime-300 max-md:text-center"
    } else if (grupo === "actinídeos") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-teal-600 bg-teal-400/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-teal-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-teal-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-teal-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-teal-300 max-md:text-center"
    } else if (grupo === "metais alcalinos") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-yellow-600 bg-yellow-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-yellow-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-yellow-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-yellow-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-yellow-300 max-md:text-center"
    } else if (grupo === "metais alcalino-terrosos") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-orange-600 bg-orange-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-orange-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-orange-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-orange-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-orange-300 max-md:text-center"
    } else if (grupo === "gases nobres") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-purple-600 bg-purple-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-purple-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-purple-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-purple-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-purple-300 max-md:text-center"
    } else if (grupo === "halogênios") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-fuchsia-400 bg-fuchsia-400/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-fuchsia-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-fuchsia-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-fuchsia-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-fuchsia-300 max-md:text-center"
    } else if (grupo === "metais pós-transição") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-red-600 bg-red-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-red-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-red-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-red-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-red-300 max-md:text-center"
    } else if (grupo === "semimetais") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-blue-600 bg-blue-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-blue-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-blue-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-blue-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-blue-300 max-md:text-center"
    } else if (grupo === "ametais") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-emerald-600 bg-emerald-600/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-emerald-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-emerald-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-emerald-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-emerald-300 max-md:text-center"
    } else if (grupo === "lantanídeos") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-amber-300 bg-amber-500 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-amber-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-amber-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-amber-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-amber-300 max-md:text-center"
    } else if (grupo === "metais de transição") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-sky-300 bg-sky-400/80 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-sky-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-sky-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-sky-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-sky-300 max-md:text-center"
    } else if (grupo === "") {
        mainCard = "flex max-md:flex-col max-md:items-center max-md:pt-10 justify-around w-4/5 border rounded border-zinc-400 bg-zinc-500 m-auto mt-28 mb-40"
        symbolCard = "flex flex-col w-32 h-40 border justify-around rounded border-zinc-400 p-2 mb-5"
        symbol = "font-overpass text-7xl text-center text-zinc-200"
        line1 = "font-overpass text-xl font-bold mt-10 border-b border-b-zinc-300 max-md:text-center max-md:text-lg"
        line2 = "font-overpass font-bold mt-4 mb-2 border-b border-b-zinc-300 max-md:text-center"
    }
  }

  colorCards()

  return (
    <div className={mainCard}>
      <section className="flex flex-col justify-center max-md:items-center">
        <div className={symbolCard}>
          <p className="font-overpass ">{numeroAtomico}</p>
          <p className={symbol}>{simbolo}</p>
          <p className="font-overpass text-center">{nome}</p>
        </div>

        <div className="max-md:flex max-md:flex-col max-md:items-center">
          <div className="mb-2 max-md:flex max-md:flex-col max-md:items-center">
            <p className="font-overpass font-bold">Ano de Descoberta</p>
            <p className="font-overpass text-white/80 font-bold">{anoDescoberta}</p>
          </div>
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <p className="font-overpass font-bold">Cientista</p>
            <p className="font-overpass text-white/80 font-bold w-48 max-md:text-center">{cientista}</p>
          </div>
        </div>    
      </section>

      <div>
        <p className={line1}>Propriedades</p>
        <div className="flex max-md:flex-col mt-5 mb-10">
          <section className="mr-10 max-md:mr-0">
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Número Atômico:</p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{numeroAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Massa Molar:</p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{massaMolar}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Número de Neutrons:</p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{neutrons}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Número de Elétrons:</p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{eletrons}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Período: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{periodo}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Família: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{familia}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm max-md:w-40">Grupo: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm max-md:w-40 max-md:text-end">{grupo}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Estado Natural: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{estadoNatural}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Ponto Ebulição: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{pontoEbulicao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Ponto Fusão: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{pontoFusao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Densidade: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{densidade}</p>
            </div>
          </section>
          <section>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Raio Atômico: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{raioAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Volume Atômico: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{volumeAtomico}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Eletronegatividade: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{eletronegatividade}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Energia de Ionização: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{energiaIonizacao}</p>
            </div>
            <div className="flex justify-between">
              <p className="w-48 font-overpass font-bold max-md:text-sm">Distribuição Eletônica: </p>
              <p className="text-white/60 font-overpass font-bold max-md:text-sm">{distribuicaoEletronica}</p>
            </div>

            <section>
              <p className={line2}>Principais usos</p>
              <section>
                <div className="flex">
                  <p className="w-5 font-overpass font-bold max-md:text-sm">1:</p>
                  <p className="text-white/60 font-overpass font-bold max-md:text-sm">{uso1}</p>
                </div>
                <div className="flex">
                  <p className="w-5 font-overpass font-bold max-md:text-sm">2:</p>
                  <p className="text-white/60 font-overpass font-bold max-md:text-sm">{uso2}</p>
                </div>
                <div className="flex">
                  <p className="w-5 font-overpass font-bold max-md:text-sm">3:</p>
                  <p className="text-white/60 font-overpass font-bold max-md:text-sm">{uso3}</p>
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
