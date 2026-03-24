import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  weight: ["100", "200", "300", "400", "500", "600", "700",],
  subsets: ["thai", "latin"],
});

export const metadata = {
  title: "วิทยาลัยการคุ้มครองผู้บริโภคด้านยา",
  description: "The College of Pharmaceutical and Health Consumer Protection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={ibmPlexSansThai.variable}>
      <body className="antialiased">
        <Header />
        <main style={{ minHeight: '60vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
