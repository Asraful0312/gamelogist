const GameList = () => {
  return (
    <div className="w-full md:w-[75%]">
      <div className="flex items-center gap-3 mb-7">
        <span>Home </span>/<span className="text-blue-200"> Genre</span>
      </div>

      {/* GAME CARDS */}
      <div className="grid grid-cols-3 gap-7">
        <div className="border p-6"></div>
        <div className="border p-6"></div>
        <div className="border p-6"></div>
      </div>
    </div>
  );
};

export default GameList;
