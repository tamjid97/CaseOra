import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CheckoutPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <Input type="email" placeholder="Email Address" className="w-full" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Address" className="col-span-2" />
                <Input placeholder="City" />
                <Input placeholder="Postal Code" />
              </div>
            </div>
            <Button className="w-full" size="lg">Continue to Payment</Button>
          </div>
          
          {/* Summary Placeholder */}
          <div className="bg-muted/30 p-6 rounded-2xl h-fit border border-border">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="text-center text-muted-foreground py-8">
              No items in cart.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
