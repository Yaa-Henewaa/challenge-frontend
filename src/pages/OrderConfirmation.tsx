import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "../components/ui/button";

const OrderConfirmation = () => {
  // Sample order data - in a real app this would come from state/props
  const orderData = {
    items: [
      {
        id: "1",
        name: "XX99 MK II",
        price: 2999,
        quantity: 1,
        image:
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
    ],
    otherItemsCount: 2,
    grandTotal: 5446,
  };

  return (
    <div className="min-h-screen bg-black/50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg p-8 lg:p-12 max-w-lg w-full">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>

          {/* Thank You Message */}
          <h1 className="text-h3 font-bold uppercase mb-4 leading-tight">
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h1>

          <p className="text-body text-muted-foreground">
            You will receive an email confirmation shortly.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-brand-gray rounded-lg overflow-hidden mb-8">
          {/* Main Item */}
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={orderData.items[0].image}
                alt={orderData.items[0].name}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-body">
                  {orderData.items[0].name}
                </h3>
                <p className="text-body text-muted-foreground">
                  $ {orderData.items[0].price.toLocaleString()}
                </p>
              </div>
              <span className="text-subtitle font-bold text-muted-foreground">
                x{orderData.items[0].quantity}
              </span>
            </div>

            {/* Other Items */}
            {orderData.otherItemsCount > 0 && (
              <div className="pt-4 border-t border-gray-300">
                <p className="text-body text-muted-foreground text-center">
                  and {orderData.otherItemsCount} other item(s)
                </p>
              </div>
            )}
          </div>

          {/* Grand Total */}
          <div className="bg-black text-white p-6">
            <div className="text-center">
              <p className="text-body text-white/50 uppercase mb-2">
                Grand Total
              </p>
              <p className="text-h6 font-bold">
                $ {orderData.grandTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <Button asChild className="w-full" size="lg">
          <Link to="/">BACK TO HOME</Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
