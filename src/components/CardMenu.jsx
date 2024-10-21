import { useContext } from "react"
import { MenuContext } from "@/context/menuContext"

const CardMenu = ({ nome, simbolo, numeroAtomico, grupo }) => {

  const { hidrogenio, alcalinos, alcalinoTerrosos, metaisTransicao, metaisPosTransicao,
        semitais, ametais, halogenios, gasesNobres, lantanideos, actinideos, outros, notSelected } = useContext(MenuContext)
  
  let cardMenu = outros

  if (grupo === "metais alcalinos") {
    cardMenu = alcalinos
  } else if (grupo === "metais alcalino-terrosos") {
    cardMenu = alcalinoTerrosos
  } else if (grupo === "metais de transição") {
    cardMenu = metaisTransicao
  } else if (grupo === "gases nobres") {
    cardMenu = gasesNobres
  } else if (grupo === "halogênios") {
    cardMenu = halogenios
  } else if (grupo === "metais pós-transição") {
    cardMenu = metaisPosTransicao
  } else if (grupo === "semimetais") {
    cardMenu = semitais
  } else if (grupo === "ametais") {
    cardMenu = ametais
  } else if (grupo === "lantanídeos") {
    cardMenu = lantanideos
  } else if (grupo === "actinídeos") {
    cardMenu = actinideos
  } else if (grupo === "Hidrogênio") {
    cardMenu = hidrogenio
  }

  return (
    <div>
      {cardMenu === notSelected ? 
        <button disabled className={cardMenu}>
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        : 
        grupo === "metais alcalinos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-yellow-600 bg-yellow-600/80 hover:bg-yellow-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "metais alcalino-terrosos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-orange-400 bg-orange-600/80 hover:bg-orange-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "metais de transição" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-sky-300 bg-sky-400/80 hover:bg-sky-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "metais pós-transição" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-red-600 bg-red-600/80 hover:bg-red-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "semimetais" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-blue-600 bg-blue-600/80 hover:bg-blue-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "ametais" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-emerald-600 bg-emerald-600/80 hover:bg-emerald-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "halogênios" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-fuchsia-400 bg-fuchsia-400/80 hover:bg-fuchsia-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "gases nobres" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-purple-600 bg-purple-600/80 hover:bg-purple-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "Hidrogênio" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-lime-400 bg-lime-600 hover:bg-lime-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "lantanídeos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-amber-400 bg-amber-500 hover:bg-amber-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        grupo === "actinídeos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-teal-300 bg-teal-400/80 hover:bg-teal-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
        :
        <button className="pt-1 flex flex-col justify-around min-w-[72px] border border-zinc-300 bg-zinc-400 hover:bg-zinc-500">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x">{simbolo}</p>
            <p className="font-overpass text-xs">{nome}</p>
          </div>
        </button>
      }
    </div>
  )
}

export default CardMenu;