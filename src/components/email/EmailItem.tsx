import React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface EmailItemProps {
  sender: string;
  subject: string;
  preview: string;
  date: string;
  isRead?: boolean;
  isSelected?: boolean;
  category?: string;
  onSelect?: () => void;
}

const EmailItem = ({
  sender = "Netflix",
  subject = "New shows you might like",
  preview = "Check out these new titles that just arrived based on your viewing history...",
  date = "May 15",
  isRead = false,
  isSelected = false,
  category = "Recommendations",
  onSelect = () => {},
}: EmailItemProps) => {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "flex items-center gap-4 px-4 py-3 border-b cursor-pointer hover:bg-gray-100 transition-colors",
        isSelected ? "bg-red-50" : "",
        !isRead ? "font-semibold" : "",
      )}
    >
      <div className="flex-shrink-0">
        <Avatar className="h-10 w-10 bg-red-600 text-white">
          <span className="text-sm">N</span>
        </Avatar>
      </div>

      <div className="flex-grow min-w-0">
        <div className="flex items-center justify-between">
          <span className={cn("text-sm", !isRead ? "font-semibold" : "")}>
            {sender}
          </span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>

        <div className="text-sm truncate">{subject}</div>

        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500 truncate">{preview}</p>
          {category && (
            <Badge
              variant="outline"
              className="ml-2 bg-red-50 text-red-800 border-red-200 text-xs"
            >
              {category}
            </Badge>
          )}
        </div>
      </div>

      {!isRead && (
        <div className="flex-shrink-0">
          <div className="h-2 w-2 rounded-full bg-red-600"></div>
        </div>
      )}
    </div>
  );
};

export default EmailItem;
