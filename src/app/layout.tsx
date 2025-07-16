// app/layout.tsx
import "./globals.css";


export const metadata = {
  title: "DrConnect",
  description: "Find doctors and connect online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  );
}
