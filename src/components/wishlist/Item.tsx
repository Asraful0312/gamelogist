import { Trash } from "lucide-react";
type Props = {
  data: {
    id: number;
    name: string;
    img: string;
  };
};

const Item = ({ data }: Props) => {
  const { name, img } = data || {};
  return (
    <div className="w-full bg-neutral-900 p-4 rounded flex items-center justify-between gap-5">
      <div className="flex gap-3">
        <img
          className="size-10 rounded object-cover"
          src={img}
          alt="game image"
        />
        <div>
          <h2 className="line-clamp-1">{name}</h2>
          <p className="text-sm">
            Rating: <span className="text-lightBlue">4.5</span>
          </p>
        </div>
      </div>

      <div
        title="Delete"
        className="flex items-center justify-center p-2 bg-neutral-800 rounded-md cursor-pointer"
      >
        <Trash className="size-5 shrink-0 text-red-600" />
      </div>
    </div>
  );
};

export default Item;
