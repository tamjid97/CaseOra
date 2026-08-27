import { ShieldCheck, Truck, RotateCcw, Gem } from "lucide-react";

const FEATURES = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Military-Grade Protection",
    description: "Drop-tested up to 10 feet. Your iPhone is safe with our impact-resistant materials."
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Premium Materials",
    description: "Crafted from aerospace-grade aramid fiber, liquid silicone, and genuine leather."
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Free Express Shipping",
    description: "Free 2-day delivery on all orders over $50. Track your package in real-time."
  },
  {
    icon: <RotateCcw className="h-8 w-8 text-primary" />,
    title: "30-Day Returns",
    description: "Not 100% satisfied? Return it within 30 days for a full refund, no questions asked."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Caseora?</h2>
          <p className="text-muted-foreground text-lg">
            We don't just make cases; we craft protective wear for your most essential device, balancing extreme durability with minimalist aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/20 hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
              <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
