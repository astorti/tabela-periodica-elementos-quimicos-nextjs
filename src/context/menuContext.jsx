'use client'
import { createContext, useState } from "react";
const listaElementos = require("./../data/elementosQuimicos");

export const MenuContext = createContext()

export const MenuConstextProvider = ({ children }) => {
  const tabelaElementosQuimicos = listaElementos.elementosQuimicos;
  const [groupFilter, setGroupFilter] = useState(tabelaElementosQuimicos)
  const [showPeriodicTable, setShowPeriodicTable] = useState(false)
  const [hidrogenio, setHidrogenio] =useState("hidrogenio")
  const [alcalinos, setAlcalinos] = useState("alcalinos")
  const [alcalinoTerrosos, setAlcalinoTerrosos] = useState("alcalinoTerrosos")
  const [metaisTransicao, setMetaisTransicao] = useState("metaisTransicao")
  const [metaisPosTransicao, setMetaisPosTransicao] = useState("metaisPosTransicao")
  const [semitais, setSemimetais] = useState("semimetais")
  const [ametais, setAmetais] = useState("ametais")
  const [halogenios, setHalogenios] = useState("halogenios")
  const [gasesNobres, setGasesNobres] = useState("gasesNobres")
  const [lantanideos, setLantanideos] = useState("lantanideos")
  const [actinideos, setActinideos] = useState("actinideos")
  const [outros, setOutros] = useState("outros")
  let notSelected = "pt-1 flex flex-col justify-around min-w-[72px] border"

  const handlePeriodicTable = () => {
    scrollToElement()
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
    handleCardMenuColor(group)
    scrollToElement()
  }

  const handleCardMenuColor = (group) => {
    if (group === "todos") {
      setHidrogenio("hidrogenio")
      setAlcalinos("alcalinos")
      setAlcalinoTerrosos("alcalinoTerrosos")
      setActinideos("actinideos")
      setMetaisPosTransicao("metaisPosTransicao")
      setSemimetais("semimetais")
      setAmetais("ametais")
      setHalogenios("halogenios")
      setGasesNobres("gasesNobres")
      setLantanideos("lantanideos")
      setMetaisTransicao("metaisTransicao")
      setOutros("outros")
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
        setAlcalinos("alcalinos")
      } else if (group === "metais alcalino-terrosos") {
        setAlcalinoTerrosos("alcalinoTerrosos")
      } else if (group === "metais de transição") {
        setMetaisTransicao("metaisTransicao")
      } else if (group === "gases nobres") {
        setGasesNobres("gasesNobres")
      } else if (group === "halogênios") {
        setHalogenios("halogenios")
      } else if (group === "metais pós-transição") {
        setMetaisPosTransicao("metaisPosTransicao")
      } else if (group === "semimetais") {
        setSemimetais("semimetais")
      } else if (group === "ametais") {
        setAmetais("ametais")
      } else if (group === "lantanídeos") {
        setLantanideos("lantanideos")
      } else if (group === "actinídeos") {
        setActinideos("actinideos")
      } else if (group === "Hidrogênio") {
        setHidrogenio("hidrogenio")
      } else if (group === "") {
        setOutros("outros")
      }
    }
  }

  const scrollToElement = () => {
    const id = document.querySelector("#mainPage")
    const height = id.offsetTop
    window.scroll({
      top: height
    })
  }

  return <MenuContext.Provider value={{
    groupFilter, handleFilter, handlePeriodicTable, showPeriodicTable,
    hidrogenio, alcalinos, alcalinoTerrosos, metaisTransicao, metaisPosTransicao, semitais,
    ametais, halogenios, gasesNobres, lantanideos, actinideos, outros, notSelected
  }}>
    {children}
  </MenuContext.Provider>
}