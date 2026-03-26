import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
// Import Global Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

/**
 * ตั้งค่า Font ภาษาไทย IBM Plex Sans Thai
 */
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  weight: ["100", "200", "300", "400", "500", "600", "700",],
  subsets: ["thai", "latin"],
});

/**
 * Metadata หลักสำหรับ SEO ของเว็บไซต์
 */
export const metadata = {
  title: "วิทยาลัยการคุ้มครองผู้บริโภคด้านยา",
  description: "The College of Pharmaceutical and Health Consumer Protection",
};

/**
 * Root Layout - โครงสร้างพื้นฐานของทุกหน้าในระบบ
 * ประกอบด้วย Header, Main Content Area และ Footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={ibmPlexSansThai.variable}>
      <body className="antialiased">
        {/* ส่วนหัวเว็บไซต์ (Navbar/Menu) */}
        <Header />
        
        {/* พื้นที่แสดงเนื้อหาหลักของแต่ละหน้า */}
        <main style={{ minHeight: '60vh' }}>
          {children}
        </main>
        
        {/* ส่วนท้ายเว็บไซต์ (Copyright/Links) */}
        <Footer />
      </body>
    </html>
  );
}
