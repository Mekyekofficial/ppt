import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-10 w-10 text-gray-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Display Name</label>
            <Input defaultValue="John Doe" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input defaultValue="john.doe@example.com" className="mt-1" />
          </div>
          <Button className="w-full">Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}