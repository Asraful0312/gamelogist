import { useState } from "react";

const FILER_OPTIONS = ["all", "today", "this week", "this month"];

const SideBar = () => {
  const [selected, setSelected] = useState("all");
  return (
    <div className="hidden md:block w-[250px] border-r border-white/10">
      <h2 className="text-lg font-medium mb-6 mt-3 px-5 text-lightBlue">
        Filter By Date
      </h2>
      <ul className="">
        {FILER_OPTIONS.map((f) => (
          <li
            key={f}
            onClick={() => setSelected(f)}
            className={`hover:bg-neutral-800 py-2 px-5 transition-all duration-300 hover:text-lightBlue capitalize ${
              selected === f ? "bg-neutral-800 text-lightBlue" : ""
            }`}
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
