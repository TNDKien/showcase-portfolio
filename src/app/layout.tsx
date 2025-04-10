import type { Metadata } from "next";
import "./styles/globals.scss";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "Kien Dang",
  description: "ICT student and web developer",
  icons: {
    icon: "/medias/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/medias/favicon.ico" />
        <link
          rel="preload"
          href="https://use.typekit.net/wyi4xkd.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          as="style"
        />
      </head>
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
