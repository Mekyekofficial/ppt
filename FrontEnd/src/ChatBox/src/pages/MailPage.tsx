import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Trash2, Inbox, Send, Star, Archive, AlertCircle, FileWarning } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function MailPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mail</h1>
        <Button>
          <Mail className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      {/* Mail Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <Inbox className="h-5 w-5 text-blue-500" />
            <div>
              <h3 className="font-medium">Inbox</h3>
              <p className="text-sm text-muted-foreground">12 unread messages</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <Send className="h-5 w-5 text-green-500" />
            <div>
              <h3 className="font-medium">Sent</h3>
              <p className="text-sm text-muted-foreground">Messages you've sent</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <Star className="h-5 w-5 text-yellow-500" />
            <div>
              <h3 className="font-medium">Starred</h3>
              <p className="text-sm text-muted-foreground">Important messages</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <Archive className="h-5 w-5 text-purple-500" />
            <div>
              <h3 className="font-medium">Archive</h3>
              <p className="text-sm text-muted-foreground">Stored messages</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <div>
              <h3 className="font-medium">Spam</h3>
              <p className="text-sm text-muted-foreground">Suspicious messages</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <Trash2 className="h-5 w-5 text-red-500" />
            <div>
              <h3 className="font-medium">Trash</h3>
              <p className="text-sm text-muted-foreground">Deleted messages</p>
            </div>
          </div>
        </Card>
      </div>

      <Separator className="my-6" />

      {/* Recent Emails */}
      <h2 className="text-xl font-semibold mb-4">Recent Emails</h2>
      <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">Project Update</h3>
            <p className="text-sm text-gray-600">Latest changes to the dashboard...</p>
          </div>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}