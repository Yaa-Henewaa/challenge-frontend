import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    navigate("/order-confirmation");
  };

  // Sample cart items from the summary
  const cartItems = [
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
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 50;
  const vat = 1079;
  const grandTotal = subtotal + shipping;

  return (
    <div className="min-h-screen bg-brand-gray py-8 lg:py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Go Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-body text-muted-foreground hover:text-brand-orange transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Go Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 lg:p-12">
              <h1 className="text-h3 font-bold uppercase mb-8">CHECKOUT</h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Billing Details */}
                <div>
                  <h2 className="subtitle text-brand-orange mb-4">
                    BILLING DETAILS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-subtitle font-bold">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Alexei Ward"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-subtitle font-bold"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="alexei@mail.com"
                        className="mt-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="phone"
                        className="text-subtitle font-bold"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+1 202-555-0136"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div>
                  <h2 className="subtitle text-brand-orange mb-4">
                    SHIPPING INFO
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="address"
                        className="text-subtitle font-bold"
                      >
                        Address
                      </Label>
                      <Input
                        id="address"
                        placeholder="1137 Williams Avenue"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-subtitle font-bold">
                        ZIP Code
                      </Label>
                      <Input id="zip" placeholder="10001" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-subtitle font-bold">
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        className="mt-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="country"
                        className="text-subtitle font-bold"
                      >
                        Country
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="United States" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h2 className="subtitle text-brand-orange mb-4">
                    PAYMENT DETAILS
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-subtitle font-bold">
                        Payment Method
                      </Label>
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="mt-2 space-y-2"
                      >
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-brand-orange">
                          <RadioGroupItem value="e-money" id="e-money" />
                          <Label
                            htmlFor="e-money"
                            className="text-subtitle font-bold"
                          >
                            e-Money
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-brand-orange">
                          <RadioGroupItem value="cash" id="cash" />
                          <Label
                            htmlFor="cash"
                            className="text-subtitle font-bold"
                          >
                            Cash on Delivery
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {paymentMethod === "e-money" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="e-money-number"
                            className="text-subtitle font-bold"
                          >
                            e-Money Number
                          </Label>
                          <Input
                            id="e-money-number"
                            placeholder="238521993"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="e-money-pin"
                            className="text-subtitle font-bold"
                          >
                            e-Money PIN
                          </Label>
                          <Input
                            id="e-money-pin"
                            placeholder="6891"
                            className="mt-2"
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "cash" && (
                      <div className="bg-brand-gray p-6 rounded-lg">
                        <p className="text-body text-muted-foreground">
                          The 'Cash on Delivery' option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 lg:p-8">
              <h2 className="text-h6 font-bold uppercase mb-8">SUMMARY</h2>

              {/* Cart Items */}
              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
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
              </div>

              {/* Totals */}
              <div className="space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-body uppercase">Total</span>
                  <span className="text-h6 font-bold">
                    $ {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body uppercase">Shipping</span>
                  <span className="text-h6 font-bold">$ {shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body uppercase">VAT (Included)</span>
                  <span className="text-h6 font-bold">
                    $ {vat.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-body uppercase">Grand Total</span>
                  <span className="text-h6 font-bold text-brand-orange">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* ...all your form fields... */}
                <Button type="submit" className="w-full" size="lg">
                  CONTINUE & PAY
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
