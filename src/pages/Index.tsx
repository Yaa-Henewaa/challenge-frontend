import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Bitmap from "../images/Bitmap.png"; 
import Bitmap2 from "../images/Bitmap (2).png"; 
import Group5 from "../images/Group 5.png";
import Group17 from "../images/Group 17 (1).png";
import blackearphones from "../images/image-removebg-preview(41).png";
import earphone from "../images/Bitmap (1).png";
import speaker from "../images/image-removebg-preview(38).png";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[90vh] lg:min-h-[80vh]">
            {/* Hero Content */}
            <div className="space-y-6 text-center lg:text-left">
              <p className=" text-white/50">NEW PRODUCT</p>

              <h1 className="text-display font-bold uppercase text-white">
                XX99 Mark II Headphones
              </h1>

              <p className="body text-white/75 max-w-md mx-auto lg:mx-0">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>

              <Button asChild variant="default" size="lg">
                <Link to="/headphones/xx99-mark-two">SEE PRODUCT</Link>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="relative order-first lg:order-last">
              <img
                src={Bitmap}
                alt="XX99 Mark II Headphones"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              name="HEADPHONES"
              image={blackearphones}
              href="/headphones"
            />
            <CategoryCard
              name="SPEAKERS"
              image={speaker}
              href="/speakers"
            />
            <CategoryCard
              name="EARPHONES"
              image={Group5}
              href="/earphones"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 space-y-32">
          {/* ZX9 Speaker */}
          <div className="bg-brand-orange rounded-lg p-8 lg:p-16 text-white overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
              <div className="text-center lg:text-left">
                <img
                  src={speaker}
                  alt="ZX9 Speaker"
                  className="w-72 h-auto mx-auto lg:mx-0 object-cover block mb-0 pb-0"
                />
              </div>

              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-display font-bold uppercase">
                  ZX9 SPEAKER
                </h2>

                <p className="body text-white/75 max-w-md mx-auto lg:mx-0">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>

                <Button asChild variant="outline" size="lg" className="bg-black hover:bg-gray-900 border-black text-white">
                  <Link to="/speakers/zx9">SEE PRODUCT</Link>
                </Button>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 944 944"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="472" cy="472" r="471.5" stroke="white" />
                <circle cx="472" cy="472" r="384.5" stroke="white" />
                <circle cx="472" cy="472" r="297.5" stroke="white" />
              </svg>
            </div>
          </div>

          {/* ZX7 Speaker */}
          <div className="relative rounded-lg overflow-hidden h-80">
            <img
              src={Group17}
              alt="ZX7 Speaker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="space-y-6 max-w-md">
                  <h3 className="text-h3 font-bold uppercase text-white">
                    ZX7 SPEAKER
                  </h3>

                  <Button asChild variant="outline" size="lg">
                    <Link to="/speakers/zx7">SEE PRODUCT</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* YX1 Earphones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src={earphone}
                alt="YX1 Earphones"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="bg-brand-gray rounded-lg p-8 lg:p-16 flex items-center">
              <div className="space-y-6">
                <h3 className="text-h3 font-bold uppercase">YX1 EARPHONES</h3>

                <Button asChild variant="secondary" size="lg">
                  <Link to="/earphones/yx1">SEE PRODUCT</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            
            <div className="space-y-6 lg:order-1">
              <h2 className="text-h2 font-bold uppercase">
                Bringing you the <span className="text-brand-orange">best</span>{" "}
                audio gear
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

            <div className="lg:order-2">
              <img
                src={Bitmap2}
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

export default Index;
