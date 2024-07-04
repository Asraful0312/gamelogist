import { Link } from "react-router-dom";
import { GameStore, GenreType } from "./types";

type Props = {
  arr: GameStore[] | GenreType[];
  to?: string;
};

const GenerateTextWithCommas = ({ arr, to }: Props) => {
  return (
    <p className="text-muted-foreground break-words ">
      {arr.map((a, i) => (
        <span key={a.id}>
          <Link
            to={to ? `${to + a.slug}` : `/games/${a.slug}`}
            className="underline"
          >
            {a.name}
          </Link>
          {arr.length !== i + 1 && ", "}
        </span>
      ))}
    </p>
  );
};

export default GenerateTextWithCommas;
