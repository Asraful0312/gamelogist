import { Skeleton } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <div className="p-1 group overflow-hidden">
      <Skeleton className="w-full h-[150px] rounded-md"></Skeleton>
      <div className="mt-5">
        <div className="flex items-center gap-3 my-3">
          <Skeleton className="w-8 h-8"></Skeleton>
          <Skeleton className="w-8 h-8"></Skeleton>
          <Skeleton className="w-8 h-8"></Skeleton>
        </div>
        {/* name */}
        <Skeleton className="w-44 h-6 mb-3"></Skeleton>

        <Skeleton className="w-20 h-6 mb-3"></Skeleton>

        <Skeleton className="w-28 h-6 mb-6"></Skeleton>

        <div className="flex justify-start mb-7">
          <Skeleton className="w-24 h-9"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
