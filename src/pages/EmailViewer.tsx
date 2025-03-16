import React, { useState } from "react";
import Header from "@/components/email/Header";
import Sidebar from "@/components/email/Sidebar";
import EmailList from "@/components/email/EmailList";
import EmailContent from "@/components/email/EmailContent";

interface Email {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  category: string;
}

interface EmailDetail {
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
}

const EmailViewer = () => {
  const [selectedCategory, setSelectedCategory] = useState("inbox");
  const [selectedEmailId, setSelectedEmailId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock email data for the detailed view
  const emailDetails: Record<string, EmailDetail> = {
    "1": {
      id: "1",
      sender: {
        name: "Netflix",
        email: "info@netflix.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=netflix",
      },
      subject: "New on Netflix: Top 10 Shows This Week",
      content: `<div>
        <p>Hello Netflix Member,</p>
        <p>Check out what everyone is watching this week on Netflix!</p>
        <div style="margin: 20px 0;">
          <h3>Top 10 Shows This Week:</h3>
          <ul>
            <li><strong>Stranger Things</strong> - Season 4 continues to break records</li>
            <li><strong>Bridgerton</strong> - The romance that has everyone talking</li>
            <li><strong>Ozark</strong> - The final season's dramatic conclusion</li>
            <li><strong>The Witcher</strong> - Fantasy adventure at its best</li>
            <li><strong>Squid Game</strong> - The phenomenon continues</li>
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
    },
    "2": {
      id: "2",
      sender: {
        name: "Netflix",
        email: "recommendations@netflix.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=netflix",
      },
      subject: "John, we just added a show you might like",
      content: `<div>
        <p>Hi John,</p>
        <p>Based on your viewing history, we think you'll enjoy these new additions to Netflix:</p>
        <div style="margin: 20px 0;">
          <h3>Recommended for You:</h3>
          <div style="display: flex; gap: 10px; overflow-x: auto; padding: 10px 0;">
            <div style="min-width: 200px; text-align: center;">
              <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&q=80" style="width: 100%; border-radius: 4px;" />
              <p><strong>Outer Banks</strong></p>
            </div>
            <div style="min-width: 200px; text-align: center;">
              <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&q=80" style="width: 100%; border-radius: 4px;" />
              <p><strong>The Queen's Gambit</strong></p>
            </div>
            <div style="min-width: 200px; text-align: center;">
              <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&q=80" style="width: 100%; border-radius: 4px;" />
              <p><strong>Money Heist</strong></p>
            </div>
          </div>
        </div>
        <p>These titles are now available to watch on your account. Sign in to start watching!</p>
        <p>Happy streaming,</p>
        <p>Your Netflix Team</p>
      </div>`,
      date: "May 14, 2023",
      isStarred: false,
    },
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedEmailId(""); // Clear selected email when changing categories
  };

  // Handle email selection
  const handleEmailSelect = (emailId: string) => {
    setSelectedEmailId(emailId);
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <Header onSearch={handleSearch} userProfile={{ name: "John Doe" }} />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />

        {/* Email list */}
        <div className="w-[500px] flex-shrink-0 overflow-hidden">
          <EmailList
            selectedEmailId={selectedEmailId}
            onSelectEmail={handleEmailSelect}
            filterCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>

        {/* Email content */}
        <div className="flex-1 overflow-hidden">
          <EmailContent
            email={selectedEmailId ? emailDetails[selectedEmailId] : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailViewer;
