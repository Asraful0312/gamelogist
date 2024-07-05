import { Skeleton } from "../ui/skeleton";

const GameDetailsSkeleton = () => {
  return (
    <div className="w-full lg:w-[65%] ">
      {/* platforms */}
      <div className="flex gap-3 mb-3">
        <Skeleton className="size-8 " />
      </div>
      {/* release playtime */}
      <div className="flex items-center gap-6 mb-4">
        <Skeleton className="h-8 w-36" />

        <Skeleton className="h-5 w-52" />
      </div>
      {/* title */}
      <Skeleton className="h-7 w-72 mb-4" />

      <Skeleton className="h-10 w-44" />

      {/* RATINGS */}
      <div className="mt-8">
        <Skeleton className="h-7 w-28 mb-2" />

        <div
          className="flex flex-col
          gap-2 mt-3"
        >
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-44" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-40" />
        </div>
      </div>

      {/* ABOUT */}
      <div className="mt-10">
        <Skeleton className="h-7 w-32 mb-2" />
        <div className="flex gap-1 flex-col">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[90%]" />
          <Skeleton className="h-5 w-[80%]" />
          <Skeleton className="h-5 w-[50%]" />
        </div>
      </div>

      {/* OTHER INFOS */}
      <div className="flex gap-14 mt-12">
        <div>
          {/* platforms */}
          <div>
            <Skeleton className="h-7 w-32 mb-3" />

            <div className="flex gap-1 flex-col">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-[80%]" />
              <Skeleton className="h-5 w-[50%]" />
            </div>
          </div>

          {/* genres */}
          <div className="mt-6">
            <Skeleton className="h-7 w-32 mb-3" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-8 w-28" />
              <Skeleton className="h-8 w-52" />
              <Skeleton className="h-8 w-44" />
            </div>
          </div>

          {/* developers */}
          <div className="mt-6">
            <Skeleton className="h-7 w-32 mb-3" />

            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-10 w-36" />
              <Skeleton className="h-10 w-52" />
            </div>
          </div>

          {/* age ratings */}
          <div className="mt-6">
            <Skeleton className="h-7 w-32 mb-3" />

            <Skeleton className="h-5 w-24" />
          </div>
        </div>

        <div>
          {/* meta score */}
          <div className="">
            <Skeleton className="h-7 w-32 mb-3" />

            <Skeleton className="size-8" />
          </div>

          {/* released date */}
          <div className="mt-6">
            <Skeleton className="h-7 w-32 mb-3" />

            <Skeleton className="h-5 w-48" />
          </div>

          <div className="mt-6">
            <Skeleton className="h-7 w-32 mb-3" />

            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-10 w-36" />
              <Skeleton className="h-10 w-52" />
            </div>
          </div>
        </div>
      </div>

      {/* WEBSITE */}
      <div className="mt-12">
        <Skeleton className="h-7 w-32 mb-3" />

        <Skeleton className="h-5 w-64 mb-2" />
      </div>

      {/* requirements */}
      <div className="mt-12  ">
        <Skeleton className="h-7 w-32 mb-3" />

        <div className="flex gap-1 flex-col">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[85%]" />
          <Skeleton className="h-5 w-[70%]" />
          <Skeleton className="h-5 w-[80%]" />
          <Skeleton className="h-5 w-[40%]" />
        </div>
      </div>

      {/* TAGS */}
      <div className="mt-12">
        <Skeleton className="h-7 w-32 mb-3" />

        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-44" />
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-36" />
        </div>
      </div>
    </div>
  );
};

export default GameDetailsSkeleton;
