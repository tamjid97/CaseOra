import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function CartPage() {
  return (
    <div className="pt-24 pb-24 min-h-[70vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 text-center text-muted-foreground py-12">
                Your cart is currently empty.
                <div className="mt-4">
                  <Link href="/shop">
                    <Button>Continue Shopping</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between mb-4 pb-4 border-b">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
                <Link href="/checkout">
                  <Button className="w-full" size="lg" disabled>Checkout</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
