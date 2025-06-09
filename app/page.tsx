import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { FeaturedToolsSection } from "@/components/home/featured-tools-section";
import { CTASection } from "@/components/home/cta-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import HomeLayout from "./homeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <HeroSection />
      <div className="flex justify-center items-center">
        <div>
          <CategoriesSection />
          <FeaturedToolsSection />
          <CTASection />
          <NewsletterSection />
        </div>
      </div>
    </HomeLayout>
  );
}
