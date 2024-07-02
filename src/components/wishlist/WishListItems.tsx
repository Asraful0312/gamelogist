import { useState } from "react";
import Item from "./Item";
import { SelectFilter } from "./SelectFilter";

const WishListItems = () => {
  const [filterOptions] = useState([
    { id: 1, name: "Gta San andres", img: "/images/1.jpeg", slug: "gtav" },
    { id: 2, name: "God of war", img: "/images/2.jpg", slug: "godofwar" },
    { id: 3, name: "Call of Duty", img: "/images/3.jpeg", slug: "callofduty" },
  ]);

  return (
    <div className="w-full px-5">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg text-lightBlue">Filter</h2>
        <div>
          <SelectFilter />
        </div>
      </div>

      <div className="flex flex-col gap-7 mt-8 w-full h-full">
        {filterOptions.map((data) => (
          <Item data={data} />
        ))}
      </div>
    </div>
  );
};

export default WishListItems;
