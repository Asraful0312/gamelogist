import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectFilter() {
  return (
    <Select>
      <SelectTrigger className=" border-white/35">
        <SelectValue placeholder="Select One" />
      </SelectTrigger>
      <SelectContent className="bg-black text-white border-white/35 ">
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="this week">This Week</SelectItem>
          <SelectItem value="this month">This Month</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
