import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  onSearch = () => {},
  placeholder = "Search Netflix emails",
  className = "",
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className={`w-full max-w-[600px] h-10 bg-black ${className}`}>
      <form
        onSubmit={handleSearch}
        className="relative flex items-center w-full"
      >
        <div className="absolute left-3 text-gray-400">
          <Search size={18} />
        </div>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-10 h-10 w-full bg-[#333333] text-white border-none rounded-md focus-visible:ring-[#E50914] focus-visible:ring-opacity-50"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
