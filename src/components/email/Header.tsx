import React from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onSearch?: (query: string) => void;
  userProfile?: {
    name: string;
    image?: string;
  };
}

const Header = ({
  onSearch = () => {},
  userProfile = {
    name: "User",
    image: undefined,
  },
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="w-full h-16 bg-black border-b border-neutral-800 flex items-center justify-between px-4 sticky top-0 z-10">
      <div className="flex items-center">
        <div className="mr-4">
          <svg
            width="92"
            height="32"
            viewBox="0 0 111 30"
            fill="#E50914"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M105.062 14.28L111 30C109.244 29.39 107.488 28.882 105.731 28.476L102.065 18.242L98.5 28.42C96.853 28.792 95.177 29.157 93.497 29.517L99.733 14.197L93.44 0H99.57L103.022 9.63L106.398 0H112.089L105.062 14.28ZM90.61 0H85.64V27.95C87.055 27.764 88.483 27.587 89.91 27.429V0H90.61ZM81.064 0H76.024V27.2C74.886 27.125 73.748 27.064 72.609 27.014C71.081 26.944 69.553 26.894 68.025 26.857V0H81.064V0ZM64.475 0H59.475V26.738H64.475V0ZM55.933 0H50.933V26.738H55.933V0ZM46.972 0H35.472V26.738H40.472V5H46.972V0ZM30.472 0H25.472V26.738H30.472V0ZM5.519 0.023C2.468 0.023 0 2.491 0 5.542V20.441C0 21.972 0.553 23.424 1.529 24.526C2.487 25.61 3.846 26.275 5.317 26.357C5.383 26.362 5.45 26.365 5.519 26.365C8.569 26.365 11.038 23.897 11.038 20.845V5.542C11.038 2.491 8.569 0.023 5.519 0.023ZM5.519 21.365C5.469 21.365 5.422 21.363 5.376 21.359C5.099 21.33 4.846 21.197 4.647 20.964C4.451 20.735 4.334 20.435 4.334 20.111V5.542C4.334 4.924 4.836 4.422 5.455 4.422H5.519C6.138 4.422 6.639 4.924 6.639 5.542V20.845C6.639 21.19 6.506 21.512 6.279 21.757C6.052 22.001 5.741 22.15 5.401 22.17C5.374 22.172 5.346 22.173 5.319 22.173L5.519 21.365Z" />
          </svg>
        </div>
        <h1 className="text-white text-xl font-bold hidden sm:block">
          Email Viewer
        </h1>
      </div>

      <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-neutral-400" />
          </div>
          <Input
            type="search"
            placeholder="Search in Netflix emails"
            className={cn(
              "pl-10 bg-neutral-900 border-neutral-700 text-white",
              "focus-visible:ring-red-600 focus-visible:border-red-600",
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      <div className="flex items-center gap-2">
        <Button variant="ghost" className="text-white hover:bg-neutral-800">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H14V4.18C16.579 4.793 18 7.038 18 10.5V16L20 17V19ZM12 5.75C10.7797 5.75 9.60273 6.29338 8.76226 7.26047C7.92179 8.22756 7.5 9.52206 7.5 10.875V16.5H16.5V10.875C16.5 9.52206 16.0782 8.22756 15.2377 7.26047C14.3973 6.29338 13.2203 5.75 12 5.75Z"
              fill="white"
            />
          </svg>
        </Button>
        <Avatar>
          <AvatarImage src={userProfile.image} alt={userProfile.name} />
          <AvatarFallback className="bg-red-600 text-white">
            {userProfile.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
