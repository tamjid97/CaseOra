import { Suspense } from "react";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export default function ShopPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Categories</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>iPhone 16 Series</li>
                <li>iPhone 15 Series</li>
                <li>MagSafe Cases</li>
                <li>Clear Cases</li>
              </ul>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-1">
            <Suspense fallback={<div>Loading products...</div>}>
              <FeaturedProducts />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
