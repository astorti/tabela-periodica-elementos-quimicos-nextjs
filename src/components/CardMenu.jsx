const CardMenu = ({ nome, simbolo, numeroAtomico, grupo }) => {
  
  let cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-zinc-400 bg-zinc-500 hover:bg-zinc-600"

  if (grupo === "metais alcalinos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-yellow-600 bg-yellow-600/80 hover:bg-yellow-700"
  } else if (grupo === "metais alcalino-terrosos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-orange-600 bg-orange-600/80 hover:bg-orange-800"
  } else if (grupo === "metais de transição") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-teal-600 bg-teal-600/40 hover:bg-teal-700"
  } else if (grupo === "gases nobres") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-purple-600 bg-purple-600/80 hover:bg-purple-800"
  } else if (grupo === "halogênios") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-fuchsia-400 bg-fuchsia-400/80 hover:bg-fuchsia-700"
  } else if (grupo === "metais pós-transição") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-red-600 bg-red-600/80 hover:bg-red-800"
  } else if (grupo === "semimetais") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-blue-600 bg-blue-600/80 hover:bg-blue-800"
  } else if (grupo === "ametais") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-emerald-600 bg-emerald-600/80 hover:bg-emerald-800"
  } else if (grupo === "lantanídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-slate-400 bg-slate-600/80 hover:bg-slate-800"
  } else if (grupo === "actinídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-sky-300 bg-sky-400/80 hover:bg-sky-700"
  } else if (grupo === "Hidrogênio") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-lime-400 bg-lime-600 hover:bg-lime-700"
  }
  
  if (nome === "Lantanídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-slate-400 bg-slate-600/80 cursor-auto"
  }

  if (nome === "Actinídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-sky-300 bg-sky-400/80 cursor-auto"
  }

  return (
    <button className={cardMenu}>
      <p className="text-xs">{numeroAtomico}</p>
      <p className="text-x">{simbolo}</p>
      <p className="text-xs">{nome}</p>
    </button>
  )
}

export default CardMenu;