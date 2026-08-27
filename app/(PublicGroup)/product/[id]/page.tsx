import { Button } from "@/components/ui/Button";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-muted rounded-3xl flex items-center justify-center">
            <span className="text-muted-foreground">Product Image {resolvedParams.id}</span>
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Premium Case {resolvedParams.id}</h1>
            <p className="text-2xl font-semibold mb-6">$49.99</p>
            <p className="text-muted-foreground mb-8">
              A premium, ultra-modern case designed specifically for your device, offering maximum protection with minimal bulk.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">Add to Cart</Button>
              <Button size="lg" variant="outline">Wishlist</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
