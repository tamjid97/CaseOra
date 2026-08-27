import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Photographer",
    content: "The AeroGlass case is incredible. It shows off the color of my iPhone 16 Pro while providing peace of mind when I'm out shooting. Dropped it twice on concrete and not a single scratch.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Tech Reviewer",
    content: "Caseora's attention to detail is unmatched. The tactile feel of the buttons and the precision cutouts make this the best third-party case I've tested this year. Highly recommended.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Designer",
    content: "I've always struggled to find a case that looks as good as the phone itself. The Liquid Silicone Elite perfectly complements the minimalist Apple aesthetic. It's soft yet grippy.",
    rating: 4.5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Loved by Thousands</h2>
          <p className="text-muted-foreground">Don't just take our word for it. Here's what our customers have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'fill-primary text-primary' : 'text-muted'}`} 
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
