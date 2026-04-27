"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar, { MenuItem, TabId } from "./Sidebar";

// นำเข้า Sections ต่างๆ
import HistorySection from "./Tabs/HistorySection/HistorySection";
import VisionMissionSection from "./Tabs/VisionMissionSection/VisionMissionSection";
import CoursesSection from "./Tabs/CoursesSection/CoursesSection";
import ExpertiseSection from "./Tabs/ExpertiseSection/ExpertiseSection";
import CommitteeSection from "./Tabs/CommitteeSection/CommitteeSection";
import EmblemSection from "./Tabs/EmblemSection/EmblemSection";
import LocationSection from "./Tabs/LocationSection/LocationSection";

import styles from "./SidebarTabsSection.module.css";

const MENU_ITEMS: MenuItem[] = [
    { id: "history", label: "ประวัติความเป็นมา" },
    { id: "vision", label: "วิสัยทัศน์และพันธกิจ" },
    { id: "courses", label: "ข้อมูลหลักสูตร" },
    { id: "expertise", label: "สาขาความเชี่ยวชาญ" },
    { id: "committee", label: "คณะกรรมการบริหาร" },
    { id: "emblem", label: "ตราสัญลักษณ์" },
    { id: "location", label: "ติดต่อและสถานที่ตั้ง" },
];

export default function SidebarTabsSection() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TabId>("history");

    // Sync state with URL params
    useEffect(() => {
        const tab = searchParams.get("tab") as TabId;
        if (tab && MENU_ITEMS.some(item => item.id === tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabChange = (id: TabId) => {
        setActiveTab(id);
        // Update URL so that "Back" navigation returns to the correct tab
        router.push(`?tab=${id}`, { scroll: false });
    };

    const tabContent: Record<TabId, React.ReactNode> = useMemo(() => ({
        history: <HistorySection />,
        vision: <VisionMissionSection />,
        courses: <CoursesSection />,
        expertise: <ExpertiseSection />,
        committee: <CommitteeSection />,
        emblem: <EmblemSection />,
        location: <LocationSection />,
    }), []);

    return (
        <section id="sidebar-tabs-section" className={styles.historySection}>
            <Sidebar 
                menuItems={MENU_ITEMS} 
                activeTab={activeTab} 
                onTabChange={handleTabChange} 
            />
            <div className={styles.historyContent}>
                {tabContent[activeTab]}
            </div>
        </section>
    );
}