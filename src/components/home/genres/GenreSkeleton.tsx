import { Skeleton } from "@/components/ui/skeleton";

const GenreSkeleton = () => {
  return (
    <div className="flex items-center flex-col py-6">
      {/* image */}
      <Skeleton className="w-24 h-20 bg-white/15"></Skeleton>
      {/* name */}
      <Skeleton className="w-20 h-5 bg-white/15 mt-5"></Skeleton>
    </div>
  );
};

export default GenreSkeleton;
