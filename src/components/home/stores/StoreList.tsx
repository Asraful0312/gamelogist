import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";
import Store from "./Store";
import { useGetStoreQuery } from "@/features/stores/storeApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { GameStore } from "@/utils/types";
import StoreSkeleton from "./StoreSkeleton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const StoreList = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const { data, isLoading, isError, error } = useGetStoreQuery({
    page: 1,
    pageSize: 9, // Fetch all data initially
  });
  const { results: stores } = data || {};

  const handleShowAll = () => {
    setIsShowAll(!isShowAll);
  };

  let content;
  if (!isError && isLoading) {
    content = (
      <>
        <StoreSkeleton />
        <StoreSkeleton />
        <StoreSkeleton />
      </>
    );
  } else if (isError) {
    content = <div>{(error as FetchBaseQueryError).status}</div>;
  } else if (!isError && !isLoading && stores?.length === 0) {
    content = <div>No genres found</div>;
  } else if (!isError && !isLoading && stores?.length > 0) {
    const visibleStores = isShowAll ? stores : stores.slice(0, 6); // Control visibility
    content = visibleStores.map((store: GameStore) => (
      <Store key={store?.id} store={store} />
    ));
  }

  return (
    <section className="mb-36  ">
      <div className={`relative ${isShowAll ? "" : "fade"}`}>
        <Wrapper className="">
          <Title>
            <h2>
              Browse <span className="text-lightBlue">Game</span> Stores
            </h2>
          </Title>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  rounded-md ">
            {content}
          </div>
        </Wrapper>
      </div>
      {!isLoading && !isError && (
        <div className="flex justify-center mt-5">
          <Button onClick={handleShowAll}>
            {isShowAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </section>
  );
};

export default StoreList;
