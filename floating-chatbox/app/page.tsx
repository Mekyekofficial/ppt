import Image from "next/image";
import FloatingChatbox from "@/components/FloatingChatbox";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Floating Chatbox Demo
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is a demo of a floating chatbox component that integrates Chat, Mail, and Task functionalities.
          Click the message icon in the bottom-right corner to open the chatbox.
        </p>
        <div className="prose">
          <h2>Features</h2>
          <ul>
            <li>Unified communication hub with Chat, Mail, and Task management</li>
            <li>Clean and modern UI using shadcn/ui components</li>
            <li>Responsive design that works on all screen sizes</li>
            <li>Real-time chat with message history</li>
            <li>Email composition and management</li>
            <li>Task creation and tracking with priority levels</li>
          </ul>

          <h2>Implementation</h2>
          <p>
            The chatbox is built using Next.js, TypeScript, and Tailwind CSS.
            It leverages the shadcn/ui component library for consistent styling
            and interactions. The floating behavior is achieved using fixed
            positioning and a slide-out animation.
          </p>
        </div>
      </div>
      <FloatingChatbox />
    </main>
  );
}
