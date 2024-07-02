import { Skeleton } from "@/components/ui/skeleton";

const StoreSkeleton = () => {
  return (
    <div
      className={`w-full relative rounded-md overflow-hidden transition-all duration-500`}
    >
      <div className="bg-neutral-950 h-full p-5">
        <div className="flex flex-col items-center">
          <Skeleton className="h-6 w-28 "></Skeleton>

          {/* <a
            className={buttonVariants({
              className: "mt-4 font-medium",
              variant: "secondary",
            })}
            href={formattedDomain}
            target="_blank"
          >
            Visit
          </a> */}
        </div>

        <div className="text-muted-foreground mt-5">
          <Skeleton className="h-6 w-12 "></Skeleton>

          <div className="flex flex-wrap gap-2 mt-2">
            <Skeleton className="h-6 w-20 "></Skeleton>
            <Skeleton className="h-6 w-24 "></Skeleton>
            <Skeleton className="h-6 w-44 "></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSkeleton;
