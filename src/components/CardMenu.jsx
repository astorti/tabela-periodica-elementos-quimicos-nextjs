import { useContext } from "react"
import { MenuContext } from "@/context/menuContext"

const CardMenu = ({ nome, simbolo, numeroAtomico, grupo }) => {

  const { hidrogenio, alcalinos, alcalinTterrosos, metaisTransicao, metaisPosTransicao,
        semitais, ametais, halogenios, gasesNobres, lantanideos, actinideos, outros, notSelected } = useContext(MenuContext)
  
  let cardMenu = outros

  if (grupo === "metais alcalinos") {
    cardMenu = alcalinos
  } else if (grupo === "metais alcalino-terrosos") {
    cardMenu = alcalinTterrosos
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
  
  if (nome === "Lantanídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-amber-400 bg-amber-500 cursor-auto"
  }

  if (nome === "Actinídeos") {
    cardMenu = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-teal-300 bg-teal-400/80 cursor-auto"
  }

  return (
    <div>
      {cardMenu === notSelected ? 
        <button disabled className={cardMenu}>
          <p className="text-xs">{numeroAtomico}</p>
          <p className="text-x">{simbolo}</p>
          <p className="text-xs">{nome}</p>
        </button>
        : 
        <button className={cardMenu}>
          <p className="text-xs">{numeroAtomico}</p>
          <p className="text-x">{simbolo}</p>
          <p className="text-xs">{nome}</p>
        </button>
      }

    </div>
  )
}

export default CardMenu;