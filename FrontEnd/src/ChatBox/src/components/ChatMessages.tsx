import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Copy, Reply, Bookmark } from "lucide-react";

type MessageAttachment = {
  type: "image" | "document" | "link";
  url: string;
  name?: string;
};

type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  replyTo?: {
    id: string;
    text: string;
    senderId: string;
  };
  attachments?: MessageAttachment[];
};

type Profile = {
  id: string;
  name: string;
  avatar?: string;
};

interface ChatMessagesProps {
  messages: Message[];
  currentProfile: Profile;
  selectedProfile: Profile;
  onReplyMessage: (message: Message) => void;
}

export function ChatMessages({ 
  messages, 
  currentProfile, 
  selectedProfile,
  onReplyMessage 
}: ChatMessagesProps) {
  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const renderAttachment = (attachment: MessageAttachment) => {
    switch (attachment.type) {
      case "image":
        return (
          <img 
            src={attachment.url} 
            alt={attachment.name || "Shared image"} 
            className="max-w-[200px] rounded-lg"
          />
        );
      case "document":
        return (
          <a 
            href={attachment.url}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-primary hover:underline"
          >
            📄 {attachment.name || "Document"}
          </a>
        );
      case "link":
        return (
          <a 
            href={attachment.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {attachment.url}
          </a>
        );
    }
  };

  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-4">
      {messages.map((message) => {
        const isCurrentUser = message.senderId === currentProfile.id;
        const profile = isCurrentUser ? currentProfile : selectedProfile;

        return (
          <div
            key={message.id}
            className={`flex gap-3 ${isCurrentUser ? "flex-row-reverse" : ""}`}
          >
            <Avatar>
              <AvatarImage src={profile.avatar} />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="max-w-[70%]">
              {message.replyTo && (
                <div className="mb-2 rounded bg-accent/50 p-2 text-sm">
                  <p className="font-medium opacity-70">
                    Reply to {message.replyTo.senderId === currentProfile.id ? "yourself" : selectedProfile.name}
                  </p>
                  <p className="opacity-70">{message.replyTo.text}</p>
                </div>
              )}
              <div
                className={`rounded-lg p-3 ${
                  isCurrentUser
                    ? "bg-[#F2FCE2] text-gray-800" // Light green for sent messages
                    : "bg-[#FEF7CD] text-gray-800" // Light yellow for received messages
                }`}
              >
                <p className="text-sm font-medium">{profile.name}</p>
                <p className="whitespace-pre-wrap">{message.text}</p>
                {message.attachments?.map((attachment, index) => (
                  <div key={index} className="mt-2">
                    {renderAttachment(attachment)}
                  </div>
                ))}
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleCopyMessage(message.text)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => onReplyMessage(message)}
                    >
                      <Reply className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}