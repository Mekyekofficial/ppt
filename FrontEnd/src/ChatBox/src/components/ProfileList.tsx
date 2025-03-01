import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Profile = {
  id: string;
  name: string;
  avatar?: string;
  status?: "online" | "offline";
};

const profiles: Profile[] = [
  { id: "1", name: "John Doe", status: "online" },
  { id: "2", name: "Jane Smith", status: "offline" },
  { id: "3", name: "Mike Johnson", status: "online" },
  { id: "4", name: "Sarah Wilson", status: "online" },
];

interface ProfileListProps {
  onSelectProfile: (profile: Profile) => void;
  selectedProfileId?: string;
}

export function ProfileList({ onSelectProfile, selectedProfileId }: ProfileListProps) {
  return (
    <div className="space-y-2">
      {profiles.map((profile) => (
        <button
          key={profile.id}
          onClick={() => onSelectProfile(profile)}
          className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
            selectedProfileId === profile.id
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent"
          }`}
        >
          <Avatar>
            <AvatarImage src={profile.avatar} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left">
            <p className="font-medium">{profile.name}</p>
            <p className="text-xs opacity-70">
              {profile.status === "online" ? "Online" : "Offline"}
            </p>
          </div>
          <div
            className={`w-2 h-2 rounded-full ${
              profile.status === "online" ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
}