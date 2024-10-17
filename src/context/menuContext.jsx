'use client'
import { createContext, useState } from "react";
const listaElementos = require("./../data/elementosQuimicos");

export const MenuContext = createContext()

export const MenuConstextProvider = ({ children }) => {
  const tabelaElementosQuimicos = listaElementos.elementosQuimicos;
  const [groupFilter, setGroupFilter] = useState(tabelaElementosQuimicos)
  const [showPeriodicTable, setShowPeriodicTable] = useState(false)
  const [hidrogenio, setHidrogenio] =useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-lime-400 bg-lime-600 hover:bg-lime-700")
  const [alcalinos, setAlcalinos] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-yellow-600 bg-yellow-600/80 hover:bg-yellow-700")
  const [alcalinTterrosos, setAlcalinoTerrosos] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-orange-600 bg-orange-600/80 hover:bg-orange-800")
  const [metaisTransicao, setMetaisTransicao] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-sky-300 bg-sky-400/80 hover:bg-sky-700")
  const [metaisPosTransicao, setMetaisPosTransicao] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-red-600 bg-red-600/80 hover:bg-red-800")
  const [semitais, setSemimetais] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-blue-600 bg-blue-600/80 hover:bg-blue-800")
  const [ametais, setAmetais] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-emerald-600 bg-emerald-600/80 hover:bg-emerald-800")
  const [halogenios, setHalogenios] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-fuchsia-400 bg-fuchsia-400/80 hover:bg-fuchsia-700")
  const [gasesNobres, setGasesNobres] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-purple-600 bg-purple-600/80 hover:bg-purple-800")
  const [lantanideos, setLantanideos] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-amber-400 bg-amber-500 hover:bg-amber-800")
  const [actinideos, setActinideos] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-teal-300 bg-teal-400/80 hover:bg-teal-700")
  const [outros, setOutros] = useState("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-zinc-400 bg-zinc-500 hover:bg-zinc-600")
  let notSelected = "pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-sky-300"

  const handlePeriodicTable = () => {
    setShowPeriodicTable(!showPeriodicTable)
  }

  const handleFilter = (group) => {
    setGroupFilter([])
    if (group === "todos") {
      tabelaElementosQuimicos.forEach(elQuimico => {
        setGroupFilter(prevElement => [...prevElement, elQuimico])
      });
    } else {
      tabelaElementosQuimicos.forEach(elQuimico => {
        if (elQuimico.grupo === group) {
          setGroupFilter(prevElement => [...prevElement, elQuimico])
        }
      });
    }
    handleCarMenuColor(group)
    scrollToElement()
  }

  const handleCarMenuColor = (group) => {
    if (group === "todos") {
      setHidrogenio("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-lime-400 bg-lime-600 hover:bg-lime-700")
      setAlcalinos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-yellow-600 bg-yellow-600/80 hover:bg-yellow-700")
      setAlcalinoTerrosos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-orange-600 bg-orange-600/80 hover:bg-orange-800")
      setActinideos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-teal-300 bg-teal-400/80 hover:bg-teal-700")
      setMetaisPosTransicao("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-red-600 bg-red-600/80 hover:bg-red-800")
      setSemimetais("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-blue-600 bg-blue-600/80 hover:bg-blue-800")
      setAmetais("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-emerald-600 bg-emerald-600/80 hover:bg-emerald-800")
      setHalogenios("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-fuchsia-400 bg-fuchsia-400/80 hover:bg-fuchsia-700")
      setGasesNobres("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-purple-600 bg-purple-600/80 hover:bg-purple-800")
      setLantanideos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-amber-400 bg-amber-500 hover:bg-amber-800")
      setMetaisTransicao("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-sky-300 bg-sky-400/80 hover:bg-sky-700")
      setOutros("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-zinc-400 bg-zinc-500 hover:bg-zinc-600")
    } else {
      setHidrogenio(notSelected)
      setAlcalinos(notSelected)
      setAlcalinoTerrosos(notSelected)
      setMetaisTransicao(notSelected)
      setMetaisPosTransicao(notSelected)
      setSemimetais(notSelected)
      setAmetais(notSelected)
      setHalogenios(notSelected)
      setGasesNobres(notSelected)
      setLantanideos(notSelected)
      setActinideos(notSelected)
      setOutros(notSelected)
      if (group === "metais alcalinos") {
        setAlcalinos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-yellow-600 bg-yellow-600/80 hover:bg-yellow-700")
      } else if (group === "metais alcalino-terrosos") {
        setAlcalinoTerrosos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-orange-600 bg-orange-600/80 hover:bg-orange-800")
      } else if (group === "metais de transição") {
        setMetaisTransicao("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-sky-300 bg-sky-400/80 hover:bg-sky-700")
      } else if (group === "gases nobres") {
        setGasesNobres("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-purple-600 bg-purple-600/80 hover:bg-purple-800")
      } else if (group === "halogênios") {
        setHalogenios("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-fuchsia-400 bg-fuchsia-400/80 hover:bg-fuchsia-700")
      } else if (group === "metais pós-transição") {
        setMetaisPosTransicao("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-red-600 bg-red-600/80 hover:bg-red-800")
      } else if (group === "semimetais") {
        setSemimetais("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-blue-600 bg-blue-600/80 hover:bg-blue-800")
      } else if (group === "ametais") {
        setAmetais("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-emerald-600 bg-emerald-600/80 hover:bg-emerald-800")
      } else if (group === "lantanídeos") {
        setLantanideos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-amber-400 bg-amber-500 hover:bg-amber-800")
      } else if (group === "actinídeos") {
        setActinideos("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-teal-300 bg-teal-400/80 hover:bg-teal-700")
      } else if (group === "Hidrogênio") {
        setHidrogenio("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-lime-400 bg-lime-600 hover:bg-lime-700")
      } else if (group === "") {
        setOutros("pt-1 flex flex-col justify-around items-center h-16 min-w-[72px] border border-zinc-400 bg-zinc-500 hover:bg-zinc-600")
      }
    }
  }

  const scrollToElement = () => {
    const id = document.querySelector("#mainPage")
    const height = id.offsetTop
    scrollPage(height)
  }

  const scrollPage = (height) => {
    window.scroll({
      top: height,
      behavior: "smooth"
    })
  }

  return <MenuContext.Provider value={{
    groupFilter, handleFilter, handlePeriodicTable, showPeriodicTable,
    hidrogenio, alcalinos, alcalinTterrosos, metaisTransicao, metaisPosTransicao, semitais,
    ametais, halogenios, gasesNobres, lantanideos, actinideos, outros, notSelected
  }}>
    {children}
  </MenuContext.Provider>
}