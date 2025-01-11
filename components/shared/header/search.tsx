import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APP_NAME, APP_SLOGAN } from "@/lib/constants";
import { SearchIcon } from "lucide-react";
import React from "react";

const categories = [ "men", "women", "kids", "accessories"];
export default async function Search() {
  return (
    <form action="/search" method="GET" className="flex items-stretch h-10">
      <Select name="category">
        <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="all">All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="search"
        name="q"
        placeholder={`${APP_NAME}, ${APP_SLOGAN}`}
        className="w-full h-full rounded-none rounded-l-none border-l-0"
      />

      <button
        type="submit"
        className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-3"
      >
        <SearchIcon className="w-6 h-6" />
      </button>
    </form>
  );
}
