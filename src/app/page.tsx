import SceneWrapper from "@/components/3d/SceneWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
    return (
        <>
            {/* Immersive 3D Background */}
            <SceneWrapper />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <PracticeAreas />
                <Testimonials />
                <CTASection />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
