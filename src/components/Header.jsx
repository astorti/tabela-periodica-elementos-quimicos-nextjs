import { IconFlask2Filled, IconFlaskFilled } from "@tabler/icons-react";

const Header = () => {

  
  
  return (
    <header className="sticky top-0">
      
      <p className="flex items-baseline justify-center gap-5 bg-sky-500 w-full pt-3 pb-3 text-center text-4xl max-md:text-sm max-md:p-5 max-md:-mb-1 font-pacifico">
        <IconFlask2Filled className="text-orange-700"/>
        Tabela Periódica dos Elementos Químicos
        <IconFlaskFilled className="text-fuchsia-700"/>
      </p>
      

      

    </header>
  );
};

export default Header;
