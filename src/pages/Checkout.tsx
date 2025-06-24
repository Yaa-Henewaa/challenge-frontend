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
import { useCart } from "../contexts/CartContext";
import OrderConfirmationModal from "../components/OrderConfirmationModal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

interface FormErrors {
  [key: string]: string;
}

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const { state, getSubtotal, getShipping, getVAT, getTotal, clearCart } =
    useCart();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    // Payment method specific validation
    if (paymentMethod === "e-money") {
      if (!formData.eMoneyNumber.trim()) {
        newErrors.eMoneyNumber = "e-Money number is required";
      }
      if (!formData.eMoneyPin.trim()) {
        newErrors.eMoneyPin = "e-Money PIN is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (state.items.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (validateForm()) {
      setShowOrderConfirmation(true);
    }
  };

  // Redirect if cart is empty
  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-gray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h2 font-bold uppercase mb-4">Cart is Empty</h1>
          <p className="text-body text-muted-foreground mb-8">
            Add some products to your cart before checkout.
          </p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

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
                        className={`mt-2 ${errors.name ? "border-red-500" : ""}`}
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
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
                        className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
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
                        className={`mt-2 ${errors.phone ? "border-red-500" : ""}`}
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
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
                        className={`mt-2 ${errors.address ? "border-red-500" : ""}`}
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-subtitle font-bold">
                        ZIP Code
                      </Label>
                      <Input
                        id="zip"
                        placeholder="10001"
                        className={`mt-2 ${errors.zip ? "border-red-500" : ""}`}
                        value={formData.zip}
                        onChange={(e) =>
                          handleInputChange("zip", e.target.value)
                        }
                      />
                      {errors.zip && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.zip}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-subtitle font-bold">
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        className={`mt-2 ${errors.city ? "border-red-500" : ""}`}
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="country"
                        className="text-subtitle font-bold"
                      >
                        Country
                      </Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          handleInputChange("country", value)
                        }
                      >
                        <SelectTrigger
                          className={`mt-2 ${errors.country ? "border-red-500" : ""}`}
                        >
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.country}
                        </p>
                      )}
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
                            className={`mt-2 ${errors.eMoneyNumber ? "border-red-500" : ""}`}
                            value={formData.eMoneyNumber}
                            onChange={(e) =>
                              handleInputChange("eMoneyNumber", e.target.value)
                            }
                          />
                          {errors.eMoneyNumber && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.eMoneyNumber}
                            </p>
                          )}
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
                            className={`mt-2 ${errors.eMoneyPin ? "border-red-500" : ""}`}
                            value={formData.eMoneyPin}
                            onChange={(e) =>
                              handleInputChange("eMoneyPin", e.target.value)
                            }
                          />
                          {errors.eMoneyPin && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.eMoneyPin}
                            </p>
                          )}
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
                {state.items.map((item) => (
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
                    $ {getSubtotal().toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body uppercase">Shipping</span>
                  <span className="text-h6 font-bold">$ {getShipping()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body uppercase">VAT (Included)</span>
                  <span className="text-h6 font-bold">
                    $ {getVAT().toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-body uppercase">Grand Total</span>
                  <span className="text-h6 font-bold text-brand-orange">
                    $ {getTotal().toLocaleString()}
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

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        isOpen={showOrderConfirmation}
        onClose={() => {
          setShowOrderConfirmation(false);
          clearCart();
        }}
      />
    </div>
  );
};

export default Checkout;
