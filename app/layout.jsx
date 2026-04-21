import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "Green commoiditys",
    template: "%s | Green commoiditys",
  },
  description:
    "Green commoiditys is a leading supplier of high-quality green coffee beans to roasters and traders worldwide. Based in [Your Location], we source premium Arabica and Robusta beans from top producing regions to deliver exceptional flavour and aroma to your cup.",
  keywords: [
    "Green commoiditys",
    "green coffee beans",
    "arabica beans",
    "robusta beans",
    "coffee traders",
    "coffee roasters",
  ],
  metadataBase: new URL("https://greencommoditys.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Green commoiditys",
    description:
      "Green commoiditys is a leading supplier of high-quality green coffee beans to roasters and traders worldwide. Based in [Your Location], we source premium Arabica and Robusta beans from top producing regions to deliver exceptional flavour and aroma to your cup.",
    url: "https://greencommoditys.com",
    siteName: "Green commoiditys",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green commoiditys",
    description:
      "Green commoiditys is a leading supplier of high-quality green coffee beans to roasters and traders worldwide. Based in India, we source premium Arabica and Robusta beans from top producing regions to deliver exceptional flavour and aroma to your cup.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Header } from "@/components/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
