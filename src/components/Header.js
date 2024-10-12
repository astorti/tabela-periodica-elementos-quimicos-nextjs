import { IconChevronDown } from "@tabler/icons-react";

const Header = () => {
  return (
    <header>
      <p className="bg-black w-full pt-5 text-center text-4xl text-white">
        TABELA PERIÓDICA
      </p>
      <div
        className="flex flex-col  items-center justify-between h-20
                      bg-black border-b-2 border-b-zinc-400"
      >
        <div className="flex flex-col items-center justify-start gap-4 h-4">
          <span className="w-80 border-b-4 border-b-white/95"></span>
          <span className="w-64 border-b-2 border-b-white/80"></span>
          <span className="w-48 border-b border-b-white/60"></span>
          <button className="h-9 w-32 border border-b-0 border-white/60 rounded">
            <IconChevronDown className="m-auto" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
