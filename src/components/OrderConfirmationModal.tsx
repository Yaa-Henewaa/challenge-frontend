import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { useCart } from "../contexts/CartContext";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderConfirmationModal = ({
  isOpen,
  onClose,
}: OrderConfirmationModalProps) => {
  const { state, getTotal } = useCart();

  const handleBackToHome = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 bg-white rounded-lg">
        <div className="p-8 lg:p-12">
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
            {/* Main Items */}
            <div className="p-6">
              {state.items.slice(0, 1).map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-body">{item.name}</h3>
                    <p className="text-body text-muted-foreground">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-subtitle font-bold text-muted-foreground">
                    x{item.quantity}
                  </span>
                </div>
              ))}

              {/* Other Items */}
              {state.items.length > 1 && (
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-body text-muted-foreground text-center">
                    and {state.items.length - 1} other item(s)
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
                  $ {getTotal().toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button
            asChild
            className="w-full"
            size="lg"
            onClick={handleBackToHome}
          >
            <Link to="/">BACK TO HOME</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderConfirmationModal;
