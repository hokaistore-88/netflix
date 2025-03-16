import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Inbox,
  Star,
  Clock,
  Send,
  Trash,
  Film,
  Gift,
  CreditCard,
  Settings,
  Plus,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
}

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  count?: number;
}

const Sidebar = ({
  className,
  selectedCategory = "inbox",
  onCategorySelect = () => {},
}: SidebarProps) => {
  const mainCategories: CategoryItem[] = [
    {
      id: "inbox",
      name: "Inbox",
      icon: <Inbox className="h-4 w-4" />,
      count: 12,
    },
    {
      id: "starred",
      name: "Starred",
      icon: <Star className="h-4 w-4" />,
      count: 4,
    },
    {
      id: "snoozed",
      name: "Snoozed",
      icon: <Clock className="h-4 w-4" />,
      count: 2,
    },
    { id: "sent", name: "Sent", icon: <Send className="h-4 w-4" /> },
    { id: "trash", name: "Trash", icon: <Trash className="h-4 w-4" /> },
  ];

  const netflixCategories: CategoryItem[] = [
    {
      id: "new-releases",
      name: "New Releases",
      icon: <Film className="h-4 w-4" />,
      count: 8,
    },
    {
      id: "recommendations",
      name: "Recommendations",
      icon: <Gift className="h-4 w-4" />,
      count: 5,
    },
    {
      id: "account",
      name: "Account",
      icon: <CreditCard className="h-4 w-4" />,
      count: 1,
    },
    {
      id: "settings",
      name: "Settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  const CategoryList = ({ categories }: { categories: CategoryItem[] }) => (
    <div className="space-y-1">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="ghost"
          size="sm"
          className={cn(
            "w-full justify-start px-2 font-normal",
            selectedCategory === category.id &&
              "bg-red-100 text-red-900 hover:bg-red-100 hover:text-red-900",
          )}
          onClick={() => onCategorySelect(category.id)}
        >
          <span className="flex items-center">
            {category.icon}
            <span className="ml-2">{category.name}</span>
          </span>
          {category.count && (
            <span className="ml-auto text-xs text-muted-foreground">
              {category.count}
            </span>
          )}
        </Button>
      ))}
    </div>
  );

  return (
    <div
      className={cn("w-64 bg-black text-white flex flex-col h-full", className)}
    >
      <div className="p-3">
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center py-6">
          <Plus className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3">
        <CategoryList categories={mainCategories} />

        <Separator className="my-4 bg-zinc-800" />

        <div className="mb-2 px-2 text-xs font-semibold text-red-600 uppercase">
          Netflix Categories
        </div>
        <CategoryList categories={netflixCategories} />
      </ScrollArea>

      <div className="p-3 mt-auto border-t border-zinc-800">
        <div className="text-xs text-zinc-400 text-center">
          Netflix Email Viewer
          <br />
          <span className="text-red-600">© 2023 Netflix</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
