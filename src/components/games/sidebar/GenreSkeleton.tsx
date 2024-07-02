import { Skeleton } from "@/components/ui/skeleton";

const GenreSkeleton = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <Skeleton className="size-8 " />
      <Skeleton className="h-6 w-20"></Skeleton>
    </div>
  );
};

export default GenreSkeleton;
