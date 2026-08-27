import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, Heart, Star } from "lucide-react";

const DUMMY_PRODUCTS = [
  { id: 1, name: "AeroGlass MagSafe", price: 49.99, rating: 4.8, isNew: true, model: "iPhone 16 Pro Max", image: "bg-zinc-800" },
  { id: 2, name: "Liquid Silicone Elite", price: 39.99, rating: 4.9, isNew: false, model: "iPhone 15 Pro", image: "bg-blue-900" },
  { id: 3, name: "Carbon Fiber Armor", price: 59.99, rating: 4.7, isNew: true, model: "iPhone 16", image: "bg-neutral-900" },
  { id: 4, name: "Crystal Clear Slim", price: 29.99, rating: 4.6, isNew: false, model: "iPhone 14 Pro Max", image: "bg-slate-200" },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular and newly arrived iPhone covers.</p>
          </div>
          <Link href="/shop">
            <Button variant="outline" className="rounded-full">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DUMMY_PRODUCTS.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 relative">
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge>New</Badge>
                </div>
              )}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="icon" className="rounded-full h-8 w-8 shadow-sm hover:text-red-500">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <Link href={`/product/${product.id}`}>
                <div className={`aspect-[4/5] w-full ${product.image} relative overflow-hidden flex items-center justify-center`}>
                  {/* Image placeholder with zoom effect */}
                  <div className="w-1/2 h-2/3 border-4 border-white/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 shadow-xl" />
                </div>
              </Link>
              
              <CardContent className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4">{product.model}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-lg">${product.price}</span>
                  <Button size="sm" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
