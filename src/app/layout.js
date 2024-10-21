import "./globals.css";
import { Overpass, Pacifico } from "next/font/google";
import { MenuConstextProvider } from "@/context/menuContext";

export const metadata = {
  title: "Tabela Periódica",
  description: "Generated by create next app",
};

const overpass = Overpass({
  subsets: ["latin"],
  variable: '--overpass'
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ["latin"],
  variable: '--pacifico'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MenuConstextProvider>
        <body className={`${overpass.variable} ${pacifico.variable}`}>{children}</body>
      </MenuConstextProvider>
    </html>
  );
}
