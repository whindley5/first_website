import "./globals.css";

export const metadata = {
  title: "First Website",
  description: "A Next.js + Python website hosted on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
