import { Skeleton } from "@/components/ui/skeleton";

const GameSkeleton = () => {
  return (
    <div className=" border-white/25 rounded-md overflow-hidden relative">
      <Skeleton className="w-full h-[150px]" />
      <div className="flex items-center gap-3 mt-4">
        <Skeleton className="w-5 h-5"></Skeleton>
        <Skeleton className="w-5 h-5"></Skeleton>
        <Skeleton className="w-5 h-5"></Skeleton>
      </div>
      <div className=" mt-4 mb-9">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Skeleton className="size-6 "></Skeleton>
            <Skeleton className="h-6 w-12 "></Skeleton>
          </div>

          <div className="flex items-center gap-1">
            <Skeleton className="size-6 "></Skeleton>
            <Skeleton className="h-6 w-8 "></Skeleton>
          </div>
        </div>

        <Skeleton className="h-6 w-48 mb-3"></Skeleton>

        <Skeleton className="w-24 h-6 mb-3"></Skeleton>

        <Skeleton className="w-32 h-6 mb-6"></Skeleton>
      </div>
    </div>
  );
};

export default GameSkeleton;
