import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "XX99 MK II",
      price: 2999,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: "2",
      name: "XX59",
      price: 899,
      quantity: 2,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: "3",
      name: "YX1",
      price: 599,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ]);

  const navigate = useNavigate();

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    onClose(); // Close the cart
    navigate("/checkout"); // Navigate to checkout
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-lg">
        <div className="p-6">
          {/* Cart Header */}
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <DialogTitle className="text-h6 font-bold uppercase tracking-wide">
              CART ({cartItems.length})
            </DialogTitle>
            {cartItems.length > 0 && (
              <button
                onClick={removeAll}
                className="text-body text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Remove all
              </button>
            )}
          </DialogHeader>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-body text-muted-foreground">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-body">{item.name}</h3>
                    <p className="text-body text-muted-foreground">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-brand-gray px-3 py-2 rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-muted-foreground hover:text-brand-orange transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-subtitle font-bold min-w-[1ch] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-muted-foreground hover:text-brand-orange transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Total */}
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-body uppercase">Total</span>
                <span className="text-h6 font-bold">
                  $ {total.toLocaleString()}
                </span>
              </div>

              {/* Checkout Button */}
              <Button className="w-full" size="lg" onClick={handleCheckout}>
                CHECKOUT
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
