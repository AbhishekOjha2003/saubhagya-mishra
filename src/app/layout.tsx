import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap"
});

export const metadata: Metadata = {
    title: "Advocate Saubhagya Mishra | Criminal Defense Counsel | Allahabad High Court",
    description: "Expert legal counsel specializing in Criminal Defense, Bail Matters, and Constitutional Law. Book online consultation with a trusted High Court Advocate.",
    keywords: "Advocate Saubhagya Mishra, Criminal Lawyer Prayagraj, Allahabad High Court, Bail Lawyer UP",
    openGraph: {
        title: "Advocate Saubhagya Mishra | High Court Counsel",
        description: "Defending Liberty. Upholding Justice.",
        type: "website",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
