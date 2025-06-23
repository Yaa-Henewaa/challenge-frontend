import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
  featured?: boolean;
  variant?: "default" | "reverse";
}

const ProductCard = ({
  id,
  name,
  description,
  image,
  category,
  isNew = false,
  featured = false,
  variant = "default",
}: ProductCardProps) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        variant === "reverse" ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Product Image */}
      <div className={`relative ${variant === "reverse" ? "lg:order-2" : ""}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Product Info */}
      <div className={`space-y-6 ${variant === "reverse" ? "lg:order-1" : ""}`}>
        {isNew && <p className="overline text-brand-orange">NEW PRODUCT</p>}

        <h2
          className={`${featured ? "text-display" : "text-h2"} font-bold uppercase`}
        >
          {name}
        </h2>

        <p className="body text-muted-foreground max-w-md">{description}</p>

        <Button asChild>
          <Link to={`/${category}/${id}`}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
