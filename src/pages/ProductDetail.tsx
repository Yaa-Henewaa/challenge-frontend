import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import Bitmap from "../images/Bitmap.png"; 
import { Button } from "../components/ui/button";
import CategoryCard from "../components/CategoryCard";

const ProductDetail = () => {
  const { category, productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Sample product data - in a real app this would be fetched based on productId
  const product = {
    id: "xx99-mark-two",
    name: "XX99 MARK II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    isNew: true,
    images: {
      main: Bitmap,
      gallery: [
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/8038336/pexels-photo-8038336.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.\n\nThe advanced Active Noise Cancellation with dedicated microphones allow you to enjoy your audio in any environment and puts you in the driver seat of your music. With a 30 hour battery life and a quick charge feature that provides 5 hours of playback after just 5 minutes of charging, convenience couldn't be more appealing.",
    inTheBox: [
      { item: "Headphone Unit", quantity: 1 },
      { item: "Replacement Earcups", quantity: 2 },
      { item: "User Manual", quantity: 1 },
      { item: "3.5mm 5m Audio Cable", quantity: 1 },
      { item: "Travel Bag", quantity: 1 },
    ],
  };

  const relatedProducts = [
    {
      id: "xx99-mark-one",
      name: "XX99 MARK I",
      category: "headphones",
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: "xx59",
      name: "XX59",
      category: "headphones",
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: "zx9-speaker",
      name: "ZX9 SPEAKER",
      category: "speakers",
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ];

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="min-h-screen bg-brand-light-gray">
      <div className="container mx-auto px-6 lg:px-8 py-16 max-w-6xl">
        {/* Go Back Link */}
        <Link
          to={`/${category || ""}`}
          className="inline-flex items-center gap-2 text-body text-muted-foreground hover:text-brand-orange transition-colors mb-16"
        >
          <ChevronLeft className="w-4 h-4" />
          Go Back
        </Link>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Product Image */}
          <div className="bg-brand-gray rounded-lg p-16 flex items-center justify-center">
            <img
              src={product.images.main}
              alt={product.name}
              className="w-full h-auto max-w-md object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-8">
            {product.isNew && (
              <p className="overline text-brand-orange">NEW PRODUCT</p>
            )}

            <h1 className="text-h2 font-bold uppercase">{product.name}</h1>

            <p className="body text-muted-foreground">{product.description}</p>

            <p className="text-h6 font-bold">
              $ {product.price.toLocaleString()}
            </p>

            {/* Add to Cart Section */}
            <div className="flex items-center gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-brand-gray px-4 py-3 rounded">
                <button
                  onClick={decrementQuantity}
                  className="text-muted-foreground hover:text-brand-orange transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-subtitle font-bold min-w-[2ch] text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="text-muted-foreground hover:text-brand-orange transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>

        {/* Features and In the Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          {/* Features */}
          <div className="lg:col-span-2">
            <h2 className="text-h3 font-bold uppercase mb-8">FEATURES</h2>
            <div className="space-y-6">
              {product.features.split("\n\n").map((paragraph, index) => (
                <p key={index} className="body text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* In the Box */}
          <div>
            <h2 className="text-h3 font-bold uppercase mb-8">IN THE BOX</h2>
            <div className="space-y-2">
              {product.inTheBox.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <span className="text-body text-brand-orange font-bold min-w-[2ch]">
                    {item.quantity}x
                  </span>
                  <span className="text-body text-muted-foreground">
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-32">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-gray rounded-lg overflow-hidden">
              <img
                src={product.images.gallery[0]}
                alt="Product detail 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-brand-gray rounded-lg overflow-hidden">
              <img
                src={product.images.gallery[1]}
                alt="Product detail 2"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-brand-gray rounded-lg overflow-hidden h-full">
              <img
                src={product.images.gallery[2]}
                alt="Product detail 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mb-32">
          <h2 className="text-h3 font-bold uppercase text-center mb-16">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="text-center group cursor-pointer"
              >
                <div className="bg-brand-gray rounded-lg p-8 mb-8 group-hover:shadow-lg transition-shadow">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-h5 font-bold uppercase mb-8">
                  {relatedProduct.name}
                </h3>
                <Button asChild>
                  <Link to={`/${relatedProduct.category}/${relatedProduct.id}`}>
                    SEE PRODUCT
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <CategoryCard
            name="HEADPHONES"
            image="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200"
            href="/headphones"
          />
          <CategoryCard
            name="SPEAKERS"
            image="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=200"
            href="/speakers"
          />
          <CategoryCard
            name="EARPHONES"
            image="https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=200"
            href="/earphones"
          />
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 lg:order-2">
            <h2 className="text-h3 font-bold uppercase">
              BRINGING YOU THE <span className="text-brand-orange">BEST</span>{" "}
              AUDIO GEAR
            </h2>
            <p className="body text-muted-foreground">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="lg:order-1">
            <img
              src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Person with headphones"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
