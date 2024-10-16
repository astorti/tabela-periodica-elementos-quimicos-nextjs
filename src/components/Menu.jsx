'use client'
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
const listaElementos = require("../data/elementosQuimicos");
import CardMenu from "./CardMenu";

const Menu = () => {
  
  const tabelaElementosQuimicos = listaElementos.elementosQuimicos;
  const [showPeriodicTable, setShowPeriodicTable] = useState(false)
  let tableStyle = "hidden"
  let familia1 = []
  let familia2 = []
  let familia3 = []
  let familia4 = []
  let familia5 = []
  let familia6 = []
  let familia7 = []
  let familia8 = []
  let familia9 = []
  let familia10 = []
  let familia11 = []
  let familia12 = []
  let familia13 = []
  let familia14 = []
  let familia15 = []
  let familia16 = []
  let familia17 = []
  let familia18 = []
  let lantanideos = []
  let actinideos = []

  {showPeriodicTable ?
    tableStyle = "fixed top-24 border border-t-0 bg-stone-900/90 flex flex-col m-auto mt-1 block" :
    tableStyle = "hidden"
  }  

  const handlePeriodicTable = () => {
    setShowPeriodicTable(!showPeriodicTable)
  }

  const elementsFamilies = () => {  
    tabelaElementosQuimicos.forEach(elemento => {
      if (elemento.familia === "1") {
        familia1.push(elemento)
      } else if (elemento.familia === "2") {
        familia2.push(elemento)
      }else if (elemento.familia === "3" && elemento.grupo !== "lantanídeos" && elemento.grupo !== "actinídeos") {
        familia3.push(elemento)
      }else if (elemento.familia === "4") {
        familia4.push(elemento)
      }else if (elemento.familia === "5") {
        familia5.push(elemento)
      }else if (elemento.familia === "6") {
        familia6.push(elemento)
      }else if (elemento.familia === "7") {
        familia7.push(elemento)
      }else if (elemento.familia === "8") {
        familia8.push(elemento)
      }else if (elemento.familia === "9") {
        familia9.push(elemento)
      }else if (elemento.familia === "10") {
        familia10.push(elemento)
      }else if (elemento.familia === "11") {
        familia11.push(elemento)
      }else if (elemento.familia === "12") {
        familia12.push(elemento)
      }else if (elemento.familia === "13") {
        familia13.push(elemento)
      }else if (elemento.familia === "14") {
        familia14.push(elemento)
      }else if (elemento.familia === "15") {
        familia15.push(elemento)
      }else if (elemento.familia === "16") {
        familia16.push(elemento)
      }else if (elemento.familia === "17") {
        familia17.push(elemento)
      }else if (elemento.familia === "18") {
        familia18.push(elemento)
      }else if (elemento.grupo === "lantanídeos") {
        lantanideos.push(elemento)
      }else if (elemento.grupo === "actinídeos") {
        actinideos.push(elemento)
      }
    });
  }
  elementsFamilies()

  const scrollToElement = (element) => {
    const id = document.querySelector(`#${element}`)
    const height = id.offsetTop - 200
    scrollPage(height)
  }

  const scrollPage = (height) => {
    handlePeriodicTable()
    window.scroll({
      top: height,
      
    })
  }
  
  return (
    <div className="flex items-between justify-center">
      <button
        onClick={() => handlePeriodicTable()}
        className="fixed z-10 -mt-6 h-6 w-32 border border-b-0 border-white/60 rounded"
      >
        {showPeriodicTable ? <IconChevronUp className="m-auto" /> : <IconChevronDown className="m-auto" />}
      </button>

      <div className={tableStyle}>

        <section className="flex">
          <div className="flex flex-col justify-end">
            {familia1.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia2.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia3.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
            <CardMenu nome="Lantanídeos" numeroAtomico="57 - 71" grupo="lantanídeos" />
            <CardMenu nome="Actinídeos" numeroAtomico="89 - 103" grupo="actinídeos"/>
          </div>
          <div className="flex flex-col justify-end">
            {familia4.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
                )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia5.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia6.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia7.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia8.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia9.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
                )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia10.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
                )
              })}
          </div>
          <div className="flex flex-col justify-end">
            {familia11.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia12.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia13.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
                )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia14.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia15.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia16.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia17.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-end">
            {familia18.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
        </section>
        <section className="flex flex-col justify-center">
          <div className="flex justify-end mt-5">
            {lantanideos.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
          <div className="flex justify-end">
            {actinideos.map((elQuimico) => {
              return (
                <div onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>      
  )
}

export default Menu;