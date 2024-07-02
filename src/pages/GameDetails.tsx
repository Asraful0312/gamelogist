import GameInfo from "@/components/game details/GameInfo";
import Wrapper from "@/components/shared/Wrapper";
import { useGetGameQuery } from "@/features/games/gameApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetGameQuery(Number(id));

  let content;
  if (isLoading) {
    content = <div>loading...</div>;
  } else if (isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!data?.id) {
    content = <div>Game not found</div>;
  }

  return (
    <section
      className={`w-full relative game-fade -mt-36 mb-36 flex before:absolute before:inset-0 before:bg-black/45 game-details`}
      style={{
        backgroundImage: `url('${data?.background_image_additional}')`,
      }}
    >
      <Wrapper className="mt-36 z-30 flex flex-col lg:flex-row gap-10">
        {content}
        {!isLoading && !isError && <GameInfo data={data} />}

        <div className="w-full lg:w-[35%]"></div>
      </Wrapper>
    </section>
  );
};

export default GameDetails;
