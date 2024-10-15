const Header = () => {
  return (
    <header className="sticky top-0">
      <p className="bg-black w-full pt-5 text-center text-4xl text-white">
        TABELA PERIÓDICA
      </p>
      <div
        className="flex flex-col  items-center justify-between h-10
                      bg-black border-b-2 border-b-zinc-400"
      >
        <div className="flex flex-col items-center justify-start gap-4 h-4">
          <span className="w-80 border-b-4 border-b-white/95"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
