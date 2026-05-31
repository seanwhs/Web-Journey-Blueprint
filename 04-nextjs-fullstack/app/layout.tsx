import './globals.css';

export const metadata = {
  title: 'Next.js Fullstack Module',
  description: 'Learning Next.js Architecture'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
