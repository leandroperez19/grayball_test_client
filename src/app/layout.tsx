import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/providers";
import { DefaultLayout } from "@/layout/default/defaultLayout.";
import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
    title: "E-commerce Products",
    description:
        "Buy products from the #1 product Seller on the market. Over 100,000+ products Purchases successfully completed!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                <StyledComponentsRegistry>
                    <Providers>
                        <DefaultLayout>{children}</DefaultLayout>
                    </Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
