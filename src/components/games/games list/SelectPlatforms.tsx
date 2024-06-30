import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectPlatforms() {
  return (
    <Select>
      <SelectTrigger className="min-w-[120px] border-white/35">
        <SelectValue placeholder="Select One" />
      </SelectTrigger>
      <SelectContent className="bg-black text-white border-white/35 ">
        <SelectGroup>
          <SelectItem value="apple">Rating</SelectItem>
          <SelectItem value="banana">Release Date</SelectItem>
          <SelectItem value="blueberry">Popularity</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
