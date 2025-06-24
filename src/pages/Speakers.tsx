import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

const Speakers = () => {
  const speakersProducts = [
    {
      id: "zx9-speaker",
      name: "ZX9 Speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "speakers",
      isNew: true,
    },
    {
      id: "zx7-speaker",
      name: "ZX7 Speaker",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image:
        "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "speakers",
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-h1 font-bold uppercase">SPEAKERS</h1>
        </div>
      </div>

      {/* Products List */}
      <div className="py-24">
        <div className="container mx-auto px-6 lg:px-8 space-y-32">
          {speakersProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              variant={index % 2 === 1 ? "reverse" : "default"}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
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
      </section>
    </div>
  );
};

export default Speakers;
