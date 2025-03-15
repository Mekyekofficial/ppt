# Floating Chatbox

A modern, unified communication hub that integrates Chat, Mail, and Task functionalities into a floating chatbox component. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Unified Communication Hub**: Seamlessly switch between Chat, Mail, and Task management
- **Modern UI**: Clean and intuitive interface using shadcn/ui components
- **Responsive Design**: Works flawlessly on all screen sizes
- **Real-time Chat**: Message history and conversation management
- **Email Management**: Compose, read, and manage emails
- **Task Management**: Create and track tasks with priority levels

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/floating-chatbox.git
   cd floating-chatbox
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
floating-chatbox/
├── app/
│   └── page.tsx           # Main demo page
├── components/
│   ├── FloatingChatbox.tsx    # Main chatbox component
│   └── tabs/
│       ├── ChatTab.tsx    # Chat functionality
│       ├── MailTab.tsx    # Email functionality
│       └── TaskTab.tsx    # Task management
└── public/
    └── avatars/          # User avatars
```

## Usage

The floating chatbox can be added to any page by importing and using the `FloatingChatbox` component:

```tsx
import FloatingChatbox from "@/components/FloatingChatbox";

export default function YourPage() {
  return (
    <div>
      <h1>Your Page Content</h1>
      <FloatingChatbox />
    </div>
  );
}
```

## Customization

The component uses Tailwind CSS for styling and can be customized by:

1. Modifying the Tailwind configuration in `tailwind.config.ts`
2. Updating the component styles using Tailwind classes
3. Adjusting the shadcn/ui theme variables in `app/globals.css`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
