import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { state, updateQuantity, clearCart, closeCart, getSubtotal } =
    useCart();

  return (
    <Dialog open={state.isOpen} onOpenChange={closeCart}>
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-lg">
        <div className="p-6">
          {/* Cart Header */}
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <DialogTitle className="text-h6 font-bold uppercase tracking-wide">
              CART ({state.items.length})
            </DialogTitle>
            {state.items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-body text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Remove all
              </button>
            )}
          </DialogHeader>

          {/* Cart Items */}
          {state.items.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-body text-muted-foreground">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {state.items.map((item) => (
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
                  $ {getSubtotal().toLocaleString()}
                </span>
              </div>

              {/* Checkout Button */}
              <Button asChild className="w-full" size="lg" onClick={closeCart}>
                <Link to="/checkout">CHECKOUT</Link>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
