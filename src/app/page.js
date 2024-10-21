'use client'
import Card from "@/components/Card";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

import { MenuContext } from "@/context/menuContext";
import { useContext } from "react";

export default function Home() {
  
  const { groupFilter } = useContext(MenuContext)

  return (
    <div id="mainPage">
      <Header />
      <Menu showPeriodicTable={false}/>
      {groupFilter.map((elQuimico) => {
        return (
          <div id={elQuimico.nome} key={+elQuimico.numeroAtomico}>
            <Card
              simbolo={elQuimico.simbolo}
              nome={elQuimico.nome}
              anoDescoberta={elQuimico.anoDescoberta}
              cientista={elQuimico.cientista}
              numeroAtomico={elQuimico.numeroAtomico}
              massaMolar={elQuimico.massaMolar}
              eletrons={elQuimico.eletrons}
              neutrons={elQuimico.neutrons}
              raioAtomico={elQuimico.raioAtomico}
              volumeAtomico={elQuimico.volumeAtomico}
              energiaIonizacao={elQuimico.energiaIonizacao}
              eletronegatividade={elQuimico.eletronegatividade}
              densidade={elQuimico.densidade}
              pontoFusao={elQuimico.pontoFusao}
              pontoEbulicao={elQuimico.pontoEbulicao}
              periodo={elQuimico.periodo}
              familia={elQuimico.familia}
              grupo={elQuimico.grupo}
              distribuicaoEletronica={elQuimico.distribuicaoEletronica}
              estadoNatural={elQuimico.estadoNatural}
              uso1={elQuimico.uso1}
              uso2={elQuimico.uso2}
              uso3={elQuimico.uso3}
            />
          </div>
        );
      })}
    </div>
  );
}
