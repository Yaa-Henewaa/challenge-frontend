import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import Bitmap from "../images/Bitmap.png"; 
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";
import CategoryCard from "../components/CategoryCard";

const ProductDetail = () => {
  const { category, productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  // Product database - in a real app this would be fetched from an API
  const products = {
    "xx99-mark-two": {
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
    },
    xx59: {
      id: "xx59",
      name: "XX59 HEADPHONES",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      price: 899,
      isNew: false,
      images: {
        main: "https://cdn.builder.io/api/v1/assets/1410c468819a43a982b993ed59decdb6/desktop-product-detail-headphones-3-00eab0?format=webp&width=800",
        gallery: [
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/8038336/pexels-photo-8038336.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
      },
      features:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio enthusiasts.\n\nWith a compact yet stylish design, this sleek headphone perfectly complements your everyday style and provides a comfortable listening experience for hours. Its fold-up design and sturdy travel bag allow for easy storage anywhere. The headphones sport a clean design devoid of tactile buttons or brand logos, all while providing exceptional audio quality through award-winning 40mm drivers.",
      inTheBox: [
        { item: "Headphone Unit", quantity: 1 },
        { item: "Replacement Earcups", quantity: 2 },
        { item: "User Manual", quantity: 1 },
        { item: "3.5mm 5m Audio Cable", quantity: 1 },
      ],
    },
    "xx99-mark-one": {
      id: "xx99-mark-one",
      name: "XX99 MARK I HEADPHONES",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados.",
      price: 1750,
      isNew: false,
      images: {
        main: "https://images.pexels.com/photos/8038336/pexels-photo-8038336.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/8038336/pexels-photo-8038336.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
      },
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. These revolutionary headphones have been created from industrial, aerospace-grade materials to emphasize durability at a relatively light weight.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
      inTheBox: [
        { item: "Headphone Unit", quantity: 1 },
        { item: "Replacement Earcups", quantity: 2 },
        { item: "User Manual", quantity: 1 },
        { item: "3.5mm 5m Audio Cable", quantity: 1 },
      ],
    },
    "zx9-speaker": {
      id: "zx9-speaker",
      name: "ZX9 SPEAKER",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      price: 4500,
      isNew: true,
      images: {
        main: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
      },
      features:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo 3.5mm inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5\" aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      inTheBox: [
        { item: "Speaker Unit", quantity: 2 },
        { item: "Speaker Cloth Panel", quantity: 2 },
        { item: "User Manual", quantity: 1 },
        { item: "3.5mm 10m Audio Cable", quantity: 1 },
        { item: "10m Optical Cable", quantity: 1 },
      ],
    },
    "zx7-speaker": {
      id: "zx7-speaker",
      name: "ZX7 SPEAKER",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      price: 3500,
      isNew: false,
      images: {
        main: "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
          "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
      },
      features:
        'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to recording equipment.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an 8" woofer and 1" silk dome tweeter that provide exceptional acoustic performance. With advanced crossover technology and individual room correction, the ZX7 delivers the kind of focused sound imaging that is the hallmark of the world\'s most recognizable monitors.',
      inTheBox: [
        { item: "Speaker Unit", quantity: 2 },
        { item: "Speaker Cloth Panel", quantity: 2 },
        { item: "User Manual", quantity: 1 },
        { item: "3.5mm 7.5m Audio Cable", quantity: 1 },
      ],
    },
    "yx1-earphones": {
      id: "yx1-earphones",
      name: "YX1 WIRELESS EARPHONES",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments.",
      price: 599,
      isNew: true,
      images: {
        main: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
          "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
      },
      features:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort and exceptional noise isolation.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and copper color scheme as well as the popular classic black and copper.",
      inTheBox: [
        { item: "Earphone Unit", quantity: 2 },
        { item: "Multi-size Earplugs", quantity: 6 },
        { item: "User Manual", quantity: 1 },
        { item: "USB-C Charging Cable", quantity: 1 },
        { item: "Travel Pouch", quantity: 1 },
      ],
    },
  };

  const product = products[productId as keyof typeof products];

  // Related products - exclude current product
  const allRelatedProducts = [
    {
      id: "xx99-mark-two",
      name: "XX99 MARK II",
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

  const relatedProducts = allRelatedProducts
    .filter((p) => p.id !== productId)
    .slice(0, 3);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images.main,
        category: category || "",
        quantity: quantity,
      });
      // Show success feedback and open cart
      openCart();
    }
  };

  // Handle product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-brand-light-gray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h2 font-bold uppercase mb-4">
            Product Not Found
          </h1>
          <Link to="/" className="text-brand-orange hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

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

              <Button onClick={handleAddToCart}>ADD TO CART</Button>
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
