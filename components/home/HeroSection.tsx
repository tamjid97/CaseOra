import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradients for ultra-modern aesthetic */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 bg-background/50 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Introducing iPhone 16 Pro Covers
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Protect with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                Elegance.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg">
              Ultra-modern, premium iPhone back covers crafted for those who demand both ultimate protection and stunning aesthetics.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/shop?model=16">
                <Button size="lg" className="rounded-full px-8">
                  Shop iPhone 16 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" size="lg" className="rounded-full px-8 bg-background/50 backdrop-blur-sm">
                  Explore All
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            {/* Mock iPhone Image Placeholder using a stylized div or a generated image. 
                In a real app, this would be a high-res webp image. */}
            <div className="relative w-full max-w-md h-[500px] sm:h-[600px] rounded-[3rem] border-[8px] border-border bg-card shadow-2xl flex flex-col overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center mt-2 z-20">
                <div className="w-1/3 h-5 bg-border rounded-full" />
              </div>
              <div className="flex-1 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                {/* Simulated MagSafe ring */}
                <div className="w-48 h-48 rounded-full border-4 border-muted-foreground/20 flex items-center justify-center relative">
                  <div className="w-12 h-16 rounded-full border-4 border-muted-foreground/20 absolute bottom-[-40px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
