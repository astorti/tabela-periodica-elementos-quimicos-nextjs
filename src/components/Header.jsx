import { MenuContext } from "@/context/menuContext";
import { IconFlask2Filled, IconFlaskFilled, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useContext} from "react";


const Header = () => {

  const { showPeriodicTable, handlePeriodicTable } = useContext(MenuContext)
  
  return (
    <header className="sticky top-0">
      
      <p className="flex items-baseline justify-center gap-5 bg-sky-500 w-full pt-5 text-center text-4xl font-pacifico">
        <IconFlask2Filled className="text-orange-700"/>
        Tabela Periódica dos Elementos Químicos
        <IconFlaskFilled className="text-fuchsia-700"/>
      </p>
      <div
        className="flex flex-col  items-center justify-between h-10 bg-sky-500"
      >
      </div>

      <button
        onClick={() => handlePeriodicTable()}
        className="flex m-auto -mt-6 h-6 w-32 border border-b-0 border-white/60 rounded"
      >
        {showPeriodicTable ? <IconChevronUp className="m-auto" /> : <IconChevronDown className="m-auto" />}
      </button>

    </header>
  );
};

export default Header;
