import HeroSection from "../components/ui/BannerSection/BannerSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SidebarTabsSection from "./components/SidebarTabsSection/SidebarTabsSection";
import CollegesSection from "./components/HighlightSection/HighlightSection";
import MeetingsSection from "./components/MeetingsSection/MeetingsSection";
import NewsSection from "./components/NewsSection/NewsSection";
import RegistrationModal from "../components/ui/RegistrationModalSection/RegistrationModal";

export default function RoyalCollegePage() {
    return (
        <div style={{ fontFamily: "var(--font-ibm-plex-sans-thai), sans-serif" }}>
            
            <HeroSection />
            <AboutSection />
            <SidebarTabsSection />
            <CollegesSection />
            <MeetingsSection />
            <NewsSection />
        </div>
    );
}