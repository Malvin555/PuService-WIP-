// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "PuService",
  description:
    "PuService delivers advanced reporting solutions designed to empower government agencies and citizens with the tools to monitor, evaluate, and enhance public services effectively.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
