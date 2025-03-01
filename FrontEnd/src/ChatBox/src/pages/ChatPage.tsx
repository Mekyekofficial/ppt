import { useState } from "react";
import { Send, Paperclip, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ProfileList } from "@/components/ProfileList";
import { ChatMessages } from "@/components/ChatMessages";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Profile = {
  id: string;
  name: string;
  avatar?: string;
};

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

// Simulated current user
const currentProfile: Profile = {
  id: "current",
  name: "You",
};

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [chatHistory, setChatHistory] = useState<Record<string, Message[]>>({});

  const handleSend = () => {
    if (!message.trim() || !selectedProfile) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "current",
      text: message,
      timestamp: new Date(),
      replyTo: replyingTo ? {
        id: replyingTo.id,
        text: replyingTo.text,
        senderId: replyingTo.senderId,
      } : undefined,
    };

    setChatHistory(prev => ({
      ...prev,
      [selectedProfile.id]: [...(prev[selectedProfile.id] || []), newMessage],
    }));
    
    setMessage("");
    setReplyingTo(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !selectedProfile) return;

    // In a real app, you would upload the file to a server here
    const attachment: MessageAttachment = {
      type: file.type.startsWith('image/') ? 'image' : 'document',
      url: URL.createObjectURL(file),
      name: file.name,
    };

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "current",
      text: `Shared ${file.type.startsWith('image/') ? 'an image' : 'a document'}`,
      timestamp: new Date(),
      attachments: [attachment],
    };

    setChatHistory(prev => ({
      ...prev,
      [selectedProfile.id]: [...(prev[selectedProfile.id] || []), newMessage],
    }));
  };

  const handleEmojiSelect = (emoji: any) => {
    setMessage(prev => prev + emoji.native);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-4">
      <Card className="w-80 p-4 overflow-y-auto">
        <h2 className="font-semibold mb-4">Profiles</h2>
        <ProfileList
          onSelectProfile={setSelectedProfile}
          selectedProfileId={selectedProfile?.id}
        />
      </Card>

      <Card className="flex-1 flex flex-col">
        {selectedProfile ? (
          <>
            <div className="border-b p-4">
              <h2 className="font-semibold">{selectedProfile.name}</h2>
            </div>
            <ChatMessages
              messages={chatHistory[selectedProfile.id] || []}
              currentProfile={currentProfile}
              selectedProfile={selectedProfile}
              onReplyMessage={setReplyingTo}
            />
            {replyingTo && (
              <div className="border-t p-2 bg-accent/50">
                <div className="flex justify-between items-center">
                  <p className="text-sm">
                    Replying to: {replyingTo.text.slice(0, 50)}
                    {replyingTo.text.length > 50 ? "..." : ""}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyingTo(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
            <div className="border-t p-4 flex gap-2">
              <Input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileUpload}
              />
              <Button
                variant="ghost"
                size="icon"
                asChild
              >
                <label htmlFor="file-upload">
                  <Paperclip className="h-4 w-4" />
                </label>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Smile className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Picker
                    data={data}
                    onEmojiSelect={handleEmojiSelect}
                  />
                </PopoverContent>
              </Popover>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a profile to start chatting
          </div>
        )}
      </Card>
    </div>
  );
}