import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import EmailItem from "./EmailItem";

interface Email {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  category: string;
}

interface EmailListProps {
  emails?: Email[];
  selectedEmailId?: string;
  onSelectEmail?: (emailId: string) => void;
  filterCategory?: string;
  searchQuery?: string;
}

const EmailList = ({
  emails = mockEmails,
  selectedEmailId = "",
  onSelectEmail = () => {},
  filterCategory = "all",
  searchQuery = "",
}: EmailListProps) => {
  const filteredEmails = emails.filter(
    (email) =>
      (filterCategory === "all" || email.category === filterCategory) &&
      (searchQuery === "" ||
        email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.preview.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="w-full h-full border-r border-gray-200 bg-white">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium">Netflix Emails</h2>
        <p className="text-sm text-gray-500">
          {filteredEmails.length} messages
        </p>
      </div>

      <ScrollArea className="h-[calc(100%-64px)]">
        <div className="divide-y divide-gray-100">
          {filteredEmails.length > 0 ? (
            filteredEmails.map((email) => (
              <div
                key={email.id}
                onClick={() => onSelectEmail(email.id)}
                className={`cursor-pointer ${selectedEmailId === email.id ? "bg-red-50" : ""}`}
              >
                <EmailItem
                  sender={email.sender}
                  subject={email.subject}
                  preview={email.preview}
                  date={email.date}
                  isRead={email.read}
                  isSelected={selectedEmailId === email.id}
                />
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              No emails found matching your criteria
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

// Mock data for default display
const mockEmails: Email[] = [
  {
    id: "1",
    sender: "Netflix",
    subject: "New on Netflix: Top 10 Shows This Week",
    preview: "Check out what everyone is watching this week on Netflix...",
    date: "May 15",
    read: false,
    category: "New Releases",
  },
  {
    id: "2",
    sender: "Netflix",
    subject: "John, we just added a show you might like",
    preview: "Based on your viewing history, we think you'll enjoy...",
    date: "May 14",
    read: true,
    category: "Recommendations",
  },
  {
    id: "3",
    sender: "Netflix",
    subject: "Your subscription will renew soon",
    preview: "Your monthly subscription will automatically renew on...",
    date: "May 12",
    read: true,
    category: "Account",
  },
  {
    id: "4",
    sender: "Netflix",
    subject: "Coming this weekend: New releases you'll love",
    preview: "Get ready for the weekend with these new titles...",
    date: "May 10",
    read: false,
    category: "New Releases",
  },
  {
    id: "5",
    sender: "Netflix",
    subject: "Your Netflix payment was successful",
    preview: "We've received your payment for the next billing cycle...",
    date: "May 8",
    read: true,
    category: "Account",
  },
  {
    id: "6",
    sender: "Netflix",
    subject: 'Because you watched "Stranger Things"',
    preview: "Here are some similar shows we think you might enjoy...",
    date: "May 5",
    read: false,
    category: "Recommendations",
  },
  {
    id: "7",
    sender: "Netflix",
    subject: "New season alert: Your favorite show returns",
    preview: "The new season of your favorite show is now available...",
    date: "May 3",
    read: false,
    category: "New Releases",
  },
  {
    id: "8",
    sender: "Netflix",
    subject: "Netflix Original: Exclusive premiere this Friday",
    preview:
      "Don't miss the exclusive premiere of our latest Netflix Original...",
    date: "May 1",
    read: true,
    category: "New Releases",
  },
  {
    id: "9",
    sender: "Netflix",
    subject: "Update to our Privacy Policy",
    preview: "We've updated our Privacy Policy. Please review the changes...",
    date: "Apr 28",
    read: true,
    category: "Account",
  },
  {
    id: "10",
    sender: "Netflix",
    subject: "Weekend movie marathon suggestions",
    preview:
      "Looking for something to watch this weekend? Check out these titles...",
    date: "Apr 26",
    read: false,
    category: "Recommendations",
  },
];

export default EmailList;
