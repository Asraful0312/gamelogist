import { Input } from "../ui/input";

const SideBar = () => {

  return (
    <aside className="w-full md:w-1/4 border border-white/15 rounded-xl px-5 py-7 min-h-screen relative  bg-black ">
      {/* GLOW EFFECT */}
      <div className="absolute bg-blue-300 blur-xl -top-1 bottom-10 right-5 -left-2 -z-30 rounded-lg"></div>

      {/* SIDE BAR ITEMS */}
      <div className="space-y-7">
        <Input
          className="border-white/40 border-b-2"
          placeholder="Find a game"
        />

        <div className="">
          <h2>Genres</h2>
          <div className="flex items-center gap-2 mt-4">
            <img className="size-8 rounded-md object-cover" src="" alt="" />
            <h3 className="text-white">Action</h3>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
