const CardMenu = ({ nome, simbolo, numeroAtomico, grupo }) => {
  
  let cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-stone-400 bg-stone-6000"

  if (grupo === "metais alcalinos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-yellow-600 bg-yellow-600/80"
  } else if (grupo === "metais alcalino-terrosos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-orange-600 bg-orange-600/80"
  } else if (grupo === "metais de transição") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-teal-600 bg-teal-600/40"
  } else if (grupo === "gases nobres") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-purple-600 bg-purple-600/80"
  } else if (grupo === "halogênios") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-fuchsia-400 bg-fuchsia-400/80"
  } else if (grupo === "metais pós-transição") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-red-600 bg-red-600/80"
  } else if (grupo === "semimetais") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-blue-600 bg-blue-600/80"
  } else if (grupo === "ametais") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-emerald-600 bg-emerald-600/80"
  } else if (grupo === "lantanídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-slate-600 bg-slate-600/80"
  } else if (grupo === "actinídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-16 border border-sky-300 bg-sky-400/80"
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