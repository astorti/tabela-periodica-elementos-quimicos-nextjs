import Card from "@/components/Card";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
const listaElementos = require("./../data/elementosQuimicos");

export default function Home() {
  const tabelaElementosQuimicos = listaElementos.elementosQuimicos;

  return (
    <div>
      <Header />
      <Menu showPeriodicTable={false}/>
      {tabelaElementosQuimicos.map((elQuimico) => {
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
