import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function TasksPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>
      <Card className="p-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Checkbox id="task1" />
            <div className="flex-1">
              <label htmlFor="task1" className="font-medium cursor-pointer">
                Complete project documentation
              </label>
              <p className="text-sm text-gray-600">Due tomorrow</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Checkbox id="task2" />
            <div className="flex-1">
              <label htmlFor="task2" className="font-medium cursor-pointer">
                Review pull requests
              </label>
              <p className="text-sm text-gray-600">Due today</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}