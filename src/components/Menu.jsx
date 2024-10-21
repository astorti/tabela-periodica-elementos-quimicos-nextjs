'use client'
import { useContext } from "react";
const listaElementos = require("../data/elementosQuimicos");
import CardMenu from "./CardMenu";
import { MenuContext } from "@/context/menuContext";

const Menu = () => {

  const  {handleFilter, showPeriodicTable, handlePeriodicTable} = useContext(MenuContext)
  
  const tabelaElementosQuimicos = listaElementos.elementosQuimicos;
  
  let tableStyle = "hidden"
  let filterButtons = "hidden"
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
    tableStyle = "border-2 border-zinc-400 border-t-0 flex flex-col m-auto mt-1 block" :
    tableStyle = "hidden"
  }  

  {showPeriodicTable ?
    filterButtons = "flex justify-center text-sm bg-neutral-400/40 -mb-1 h-8" :
    filterButtons = "hidden"
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
    const height = id.offsetTop - 720
    handlePeriodicTable()
    window.scroll({
      top: height,
      behavior: "smooth"
    })
  }
  
  return (
    <div className="flex flex-col items-between justify-center">
      
      <div className={filterButtons}>
        <div className="flex gap-1">
          <input type="radio" name="grupo" value="metais alcalinos" onClick={() => handleFilter('metais alcalinos')}/><p className="font-overpass flex items-center text-yellow-600 mr-2">metal alcalino</p>
          <input type="radio" name="grupo" value="metais alcalino-terrosos" onClick={() => handleFilter('metais alcalino-terrosos')}/><p className="font-overpass flex items-center text-orange-600 mr-2">metal alcalino-terroso</p>
          <input type="radio" name="grupo" value="metais de transição" onClick={() => handleFilter('metais de transição')}/><p className="font-overpass flex items-center text-sky-500 mr-2">metal de transição</p>
          <input type="radio" name="grupo" value="metais pós-transição" onClick={() => handleFilter('metais pós-transição')}/><p className="font-overpass flex items-center text-red-600 mr-2">metal pós-transição</p>
        </div>
        <div className="flex gap-1">
          <input type="radio" name="grupo" value="semimetais" onClick={() => handleFilter('semimetais')}/><p className="font-overpass flex items-center text-blue-500 mr-2">semimetal</p>
          <input type="radio" name="grupo" value="ametais" onClick={() => handleFilter('ametais')}/><p className="font-overpass flex items-center text-emerald-600 mr-2">ametal</p>
          <input type="radio" name="grupo" value="halogênios" onClick={() => handleFilter('halogênios')}/><p className="font-overpass flex items-center text-fuchsia-500 mr-2">halogênio</p>
          <input type="radio" name="grupo" value="gases nobres" onClick={() => handleFilter('gases nobres')}/><p className="font-overpass flex items-center text-purple-500 mr-2">gás nobre</p>
          <input type="radio" name="grupo" value="lantanídeos" onClick={() => handleFilter('lantanídeos')}/><p className="font-overpass flex items-center text-amber-600 mr-2">lantanídeos</p>
          <input type="radio" name="grupo" value="actinídeos" onClick={() => handleFilter('actinídeos')}/><p className="font-overpass flex items-center text-teal-500 mr-2">actinídeos</p>
        </div>
        <div className="flex gap-1">
          <input type="radio" name="grupo" value="outros" onClick={() => handleFilter('')}/><p className="font-overpass flex items-center text-zinc-400">outros</p>
          <input type="radio" name="grupo" value="todos" onClick={() => handleFilter('todos')}/><p className="font-overpass flex items-center text-lime-600">todos</p>
        </div>
      </div>

      <div className={tableStyle}>

        <section className="flex">
          <div className="flex flex-col justify-end">
            {familia1.map((elQuimico) => {
              return (
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
                  <CardMenu
                    numeroAtomico={elQuimico.numeroAtomico}
                    simbolo={elQuimico.simbolo}
                    nome={elQuimico.nome}
                    grupo={elQuimico.grupo}                    
                  />
                </div>
              )
            })}

            <div className=" pt-1 gap-6 flex flex-col justify-around items-center min-h-[53.5px] min-w-[72px] border border-amber-400 bg-amber-500">
              <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">57 - 71</p>
              <p className="font-overpass text-xs">Lantanídeos</p>
            </div>
            <div className="pt-1 gap-6 flex flex-col justify-around items-center min-h-[53.5px] min-w-[72px] border border-teal-300 bg-teal-400/80">
              <p className="font-overpass text-xs text-left ml-1 -mb-2 font-extralight">89 - 103</p>
              <p className="font-overpass text-xs">Actinídeos</p>
            </div>
            
          </div>
          <div className="flex flex-col justify-end">
            {familia4.map((elQuimico) => {
              return (
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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
                <div key={elQuimico.numeroAtomico} onClick={() => scrollToElement(elQuimico.nome)}>
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