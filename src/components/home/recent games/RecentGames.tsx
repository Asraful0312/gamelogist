import Wrapper from "../../shared/Wrapper";
import GameCard from "./GameCard";

const GAMES = [
  {
    name: "Grand Theft Auto V PS4",
    author: "John Doe",
    released: "21 may 2014",
    imgUrl:
      "https://www.godisageek.com/wp-content/uploads/GTAV-Review-1024x576.jpg",
  },
  {
    name: "Vampire: The Masquerade - Bloodlines 2",
    author: "John Doe",
    released: "21 may 2014",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowf00VRBlEFko2tU3KkuGM19Jo9c4rSse3Hxok6OgcTWSSeHbd7ck3Le7v36p14ad0V8&usqp=CAU",
  },
  {
    name: "Hollow Knight: Silksong",
    author: "Jane Doe",
    released: "11 april 2019",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5ihLnIXE-jCSUkVUSZG_5hrn8Sp_90a5Sw&",
  },
  {
    name: "Prince of Persia: The Sands of Time Remake",
    author: "Ubisoft Entertainment",
    released: "30 may 2024",
    imgUrl:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4kvUGP06XxwIDPMDgrganQ/d022a2a43a52926fc81f9c8784d24f1b/media0.jpg",
  },
];

const RecentGames = () => {
  return (
    <section className="my-36">
      <Wrapper>
        <h2 className="text-white font-bold text-2xl mb-8">
          Recent Released <span className="text-blue-200">Games</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* CARD */}
          {GAMES.map((game, i) => (
            <GameCard key={game.name + i} game={game} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default RecentGames;
