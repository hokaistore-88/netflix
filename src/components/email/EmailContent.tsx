import React from "react";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Clock,
  Forward,
  MoreHorizontal,
  Reply,
  ReplyAll,
  Star,
  Trash2,
} from "lucide-react";

interface EmailContentProps {
  email?: {
    id: string;
    sender: {
      name: string;
      email: string;
      avatar?: string;
    };
    subject: string;
    content: string;
    date: string;
    isStarred?: boolean;
    attachments?: Array<{
      name: string;
      size: string;
      type: string;
    }>;
  };
}

const EmailContent = ({ email }: EmailContentProps) => {
  // Default email data if none is provided
  const defaultEmail = {
    id: "1",
    sender: {
      name: "Netflix",
      email: "info@netflix.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=netflix",
    },
    subject: "New Shows and Movies Just Added",
    content: `<div>
      <p>Hello Netflix Member,</p>
      <p>We've just added some exciting new titles to our library that we think you'll love based on your viewing history.</p>
      <div style="margin: 20px 0;">
        <h3>New Releases This Week:</h3>
        <ul>
          <li><strong>Stranger Things Season 5</strong> - The epic conclusion to the beloved series</li>
          <li><strong>The Crown: Final Season</strong> - The royal saga comes to an end</li>
          <li><strong>Squid Game: Season 2</strong> - The games continue with higher stakes</li>
        </ul>
      </div>
      <div style="margin: 20px 0;">
        <img src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80" alt="Netflix Shows" style="width: 100%; max-width: 600px; border-radius: 8px;" />
      </div>
      <p>Start watching now on any device. As always, if you have any questions about your account, please visit our Help Center.</p>
      <p>Enjoy!</p>
      <p>The Netflix Team</p>
    </div>`,
    date: "May 15, 2023",
    isStarred: true,
    attachments: [
      {
        name: "may_releases.pdf",
        size: "2.4 MB",
        type: "pdf",
      },
      {
        name: "viewing_recommendations.xlsx",
        size: "1.1 MB",
        type: "xlsx",
      },
    ],
  };

  const displayEmail = email || defaultEmail;

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200">
      {/* Email action toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Previous</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Archive className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Archive</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Clock className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Snooze</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>More</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Email header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{displayEmail.subject}</h1>
          <Button
            variant="ghost"
            size="icon"
            className={displayEmail.isStarred ? "text-yellow-400" : ""}
          >
            <Star
              className="h-5 w-5"
              fill={displayEmail.isStarred ? "currentColor" : "none"}
            />
          </Button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Avatar>
              <img
                src={displayEmail.sender.avatar}
                alt={displayEmail.sender.name}
                className="h-10 w-10 rounded-full"
              />
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">
                  {displayEmail.sender.name}
                </span>
                <span className="text-gray-500 text-sm">
                  &lt;{displayEmail.sender.email}&gt;
                </span>
              </div>
              <span className="text-sm text-gray-500">to me</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">{displayEmail.date}</div>
        </div>
      </div>

      {/* Email content */}
      <div className="flex-1 p-6 overflow-auto">
        <div dangerouslySetInnerHTML={{ __html: displayEmail.content }} />

        {displayEmail.attachments && displayEmail.attachments.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-medium mb-3">
              Attachments ({displayEmail.attachments.length})
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {displayEmail.attachments.map((attachment, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 flex items-center space-x-3"
                >
                  <div className="bg-gray-100 p-2 rounded-md">
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{attachment.name}</p>
                    <p className="text-xs text-gray-500">{attachment.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reply actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Reply className="h-4 w-4" />
            <span>Reply</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <ReplyAll className="h-4 w-4" />
            <span>Reply All</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Forward className="h-4 w-4" />
            <span>Forward</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
