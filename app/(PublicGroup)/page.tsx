import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <CategoriesGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
