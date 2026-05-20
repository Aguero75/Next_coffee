import { Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coffee House | Home of the Best Brews",
  description:
    "Discover the rich flavors and cozy ambiance of Coffee House, your go-to destination for the finest coffee experience. From expertly crafted espresso to delightful pastries, we serve up moments of warmth and connection in every cup. Join us and savor the art of coffee at its best.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${bodoniModa.variable}  h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
