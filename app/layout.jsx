import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Menubar from "@/components/menubar";

export const metadata = {
  title: "Book Library",
  description:
    "A simple book library where users can keep track of books they've read, or are currently reading.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
