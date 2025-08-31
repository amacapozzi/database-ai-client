import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ConnectionString() {
  return (
    <div className={`w-full px-4 my-4`}>
      <div className="flex">
        <Select>
          <SelectTrigger className="w-max rounded-none rounded-l-lg border-r-neutral-800 focus:z-10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
            <SelectItem value="PUT">PUT</SelectItem>
            <SelectItem value="DELETE">DELETE</SelectItem>
            <SelectItem value="PATCH">PATCH</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder="Database URL"
          className="flex-1 rounded-none border-x-0 focus:z-10 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none"
        />

        <Button className="rounded-l-none font-geist-mono bg-orange-600 hover:bg-orange-700 text-white px-6">
          Create Connection
        </Button>
      </div>
    </div>
  );
}
