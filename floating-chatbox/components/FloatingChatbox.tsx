"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, CheckSquare, X } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import tab components to avoid any potential SSR issues
const ChatTab = dynamic(() => import("@/components/tabs/ChatTab"), { ssr: false });
const MailTab = dynamic(() => import("@/components/tabs/MailTab"), { ssr: false });
const TaskTab = dynamic(() => import("@/components/tabs/TaskTab"), { ssr: false });

export default function FloatingChatbox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[400px] sm:w-[600px] p-0 bg-background"
        >
          <Card className="h-full border-0 rounded-none">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Messages</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Tabs defaultValue="chat" className="flex-1">
                <TabsList className="w-full flex justify-center gap-4 border-b rounded-none h-12 bg-transparent px-4">
                  <TabsTrigger
                    value="chat"
                    className="flex items-center gap-2 data-[state=active]:bg-background px-6"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Chat
                  </TabsTrigger>
                  <TabsTrigger
                    value="mail"
                    className="flex items-center gap-2 data-[state=active]:bg-background px-6"
                  >
                    <Mail className="h-4 w-4" />
                    Mail
                  </TabsTrigger>
                  <TabsTrigger
                    value="tasks"
                    className="flex items-center gap-2 data-[state=active]:bg-background px-6"
                  >
                    <CheckSquare className="h-4 w-4" />
                    Tasks
                  </TabsTrigger>
                </TabsList>
                <div className="flex-1 overflow-hidden">
                  <TabsContent value="chat" className="h-full m-0">
                    <ChatTab />
                  </TabsContent>
                  <TabsContent value="mail" className="h-full m-0">
                    <MailTab />
                  </TabsContent>
                  <TabsContent value="tasks" className="h-full m-0">
                    <TaskTab />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </Card>
        </SheetContent>
      </Sheet>
    </div>
  );
} 