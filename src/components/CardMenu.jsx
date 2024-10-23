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
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        : 
        grupo === "metais alcalinos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-yellow-700 bg-yellow-600/80 hover:bg-yellow-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "metais alcalino-terrosos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-orange-700 bg-orange-600/80 hover:bg-orange-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "metais de transição" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-sky-500 bg-sky-400/80 hover:bg-sky-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "metais pós-transição" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-red-700 bg-red-600/80 hover:bg-red-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "semimetais" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-blue-700 bg-blue-600/80 hover:bg-blue-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "ametais" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-emerald-700 bg-emerald-600/80 hover:bg-emerald-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "halogênios" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-fuchsia-500 bg-fuchsia-400/80 hover:bg-fuchsia-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "gases nobres" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-purple-700 bg-purple-600/80 hover:bg-purple-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "Hidrogênio" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-lime-700 bg-lime-600 hover:bg-lime-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "lantanídeos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-amber-600 bg-amber-500 hover:bg-amber-800">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        grupo === "actinídeos" ? 
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-teal-500 bg-teal-400/80 hover:bg-teal-700">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
        :
        <button className="pt-1 flex flex-col justify-around min-w-[65px] max-md:min-w-[20px] border border-zinc-500 bg-zinc-400 hover:bg-zinc-500">
          <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight max-md:hidden">{numeroAtomico}</p>
          <div>
            <p className="font-overpass text-x max-md:font-extralight max-md:text-xs">{simbolo}</p>
            <p className="font-overpass text-[10px] max-md:hidden">{nome}</p>
          </div>
        </button>
      }
    </div>
  )
}

export default CardMenu;