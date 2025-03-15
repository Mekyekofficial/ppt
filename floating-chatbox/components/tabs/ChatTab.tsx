"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Smile, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface Message {
  id: string;
  content: string;
  sender: string;
  isUser: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  unreadCount: number;
  isOnline: boolean;
  messages: Message[];
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Alice Smith",
    avatar: "",
    lastMessage: "Hey, how are you doing?",
    unreadCount: 2,
    isOnline: true,
    messages: [
      {
        id: "1",
        content: "Hey, how are you doing?",
        sender: "Alice Smith",
        isUser: false
      },
      {
        id: "2",
        content: "I'm good, thanks! How about you?",
        sender: "You",
        isUser: true
      }
    ]
  },
  {
    id: "2",
    name: "Bob Johnson",
    avatar: "",
    lastMessage: "Can we schedule a meeting?",
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        id: "1",
        content: "Can we schedule a meeting?",
        sender: "Bob Johnson",
        isUser: false
      }
    ]
  },
  {
    id: "3",
    name: "Emma Davis",
    avatar: "",
    lastMessage: "The project looks great!",
    unreadCount: 1,
    isOnline: true,
    messages: [
      {
        id: "1",
        content: "The project looks great!",
        sender: "Emma Davis",
        isUser: false
      }
    ]
  }
];

// Update DragState interface
interface DragState {
  isDragging: boolean;
  startY: number;
  startHeight: number;
}

export default function ChatTab() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startY: 0,
    startHeight: 500, // Default height
  });
  const [chatHeight, setChatHeight] = useState(500);
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node) &&
        !emojiButtonRef.current?.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update drag handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragState.isDragging) return;
      
      if (dragState.startY !== undefined && dragState.startHeight !== undefined) {
        // Vertical dragging
        const deltaY = e.clientY - dragState.startY;
        const newHeight = Math.max(300, Math.min(800, dragState.startHeight - deltaY));
        setChatHeight(newHeight);
      }
    };

    const handleMouseUp = () => {
      setDragState(prev => ({ ...prev, isDragging: false }));
    };

    if (dragState.isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragState]);

  const selectedChat = mockConversations.find(
    (conversation) => conversation.id === selectedConversation
  );

  const filteredConversations = mockConversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: messageInput,
      sender: "You",
      isUser: true
    };

    selectedChat.messages.push(newMessage);
    selectedChat.lastMessage = messageInput;
    setMessageInput("");  
  };

  const formatMessageDate = (date: Date) => {
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const isYesterday = new Date(now.setDate(now.getDate() - 1)).toDateString() === date.toDateString();

    if (isToday) {
      return format(date, "h:mm a");
    } else if (isYesterday) {
      return "Yesterday " + format(date, "h:mm a");
    } else {
      return format(date, "MMM d, h:mm a");
    }
  };

  const handleEmojiSelect = (emoji: any) => {
    setMessageInput(prev => prev + emoji.native);
  };

  return (
    <div 
      ref={chatContainerRef}
      className="flex h-full relative"
      style={{ height: `${chatHeight}px` }}
    >
      {/* Drag handle */}
      <div
        ref={dragHandleRef}
        className="absolute top-0 left-0 right-0 h-6 cursor-ns-resize flex items-center justify-center bg-background border-b"
        onMouseDown={(e) => {
          setDragState({
            isDragging: true,
            startY: e.clientY,
            startHeight: chatHeight,
          });
        }}
      >
      </div>

      {/* Conversation List */}
      <div className="w-1/3 border-r flex flex-col mt-6">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 cursor-pointer hover:bg-accent ${
                selectedConversation === conversation.id ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback className="text-lg">
                      {conversation.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                    conversation.isOnline ? "bg-green-500" : "bg-gray-300"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <span className="text-xs text-muted-foreground">
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
                {conversation.unreadCount > 0 && (
                  <Badge variant="secondary" className="rounded-full">
                    {conversation.unreadCount}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Thread */}
      <div className="flex-1 flex flex-col bg-accent/5 mt-6">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b bg-background">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedChat.avatar} />
                  <AvatarFallback>
                    {selectedChat.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedChat.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedChat.isOnline ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Container with padding for fixed input */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 pb-[80px]">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] ${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    } rounded-lg p-3`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">
                        {message.sender}
                      </span>
                      <span className="text-xs opacity-70">
                      
                      </span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed Message Input */}
            <div className="absolute bottom-0 left-[33.333%] right-0 p-4 border-t bg-background">
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  multiple
                  aria-label="Upload files"
                  title="Upload files"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => document.getElementById("file-upload")?.click()}
                  aria-label="Upload files"
                >
                  <Paperclip className="h-5 w-5" />
                </Button>
                <div className="relative">
                  <Button
                    ref={emojiButtonRef}
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    aria-label="Add emoji"
                  >
                    <Smile className="h-5 w-5" />
                  </Button>
                  {showEmojiPicker && (
                    <div
                      ref={emojiPickerRef}
                      className="absolute bottom-full right-0 mb-2"
                      style={{ zIndex: 50 }}
                    >
                      <Picker
                        data={data}
                        onEmojiSelect={handleEmojiSelect}
                        theme="light"
                        previewPosition="none"
                      />
                    </div>
                  )}
                </div>
                <Input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
} 