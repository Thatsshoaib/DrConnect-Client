// app/layout.tsx
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";
import "./globals.css";

export const metadata = {
  title: "DrConnect",
  description: "Find doctors and connect online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
