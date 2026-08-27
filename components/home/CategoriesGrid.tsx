import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  { name: "iPhone 16 Pro Max", href: "/shop?model=16promax", size: "col-span-1 sm:col-span-2 row-span-2", bg: "bg-neutral-900", text: "text-white" },
  { name: "MagSafe Collection", href: "/shop?category=magsafe", size: "col-span-1", bg: "bg-blue-900/40", text: "text-foreground" },
  { name: "Liquid Silicone", href: "/shop?category=silicone", size: "col-span-1", bg: "bg-rose-900/30", text: "text-foreground" },
  { name: "Premium Leather", href: "/shop?category=leather", size: "col-span-1 sm:col-span-2", bg: "bg-amber-900/20", text: "text-foreground" },
];

export function CategoriesGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect match for your device. From ultra-slim clear cases to premium leather folios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[200px]">
          {CATEGORIES.map((cat, idx) => (
            <Link 
              key={idx} 
              href={cat.href}
              className={`group relative overflow-hidden rounded-3xl p-8 flex flex-col justify-end transition-transform hover:scale-[1.02] active:scale-95 ${cat.size} ${cat.bg}`}
            >
              <div className="absolute top-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg">
                  <ArrowUpRight className={`h-5 w-5 ${cat.text === 'text-white' ? 'text-foreground' : ''}`} />
                </div>
              </div>
              <h3 className={`text-2xl font-bold ${cat.text} z-10`}>{cat.name}</h3>
              
              {/* Abstract decorative shapes for premium feel */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
