import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
}

const CategoryCard = ({ name, image, href }: CategoryCardProps) => {
  return (
    <div className="group bg-brand-gray rounded-lg p-6 text-center relative overflow-hidden hover:shadow-lg transition-shadow">
      {/* Category Image */}
      <div className="mb-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 mx-auto object-cover"
        />
      </div>

      {/* Category Name */}
      <h3 className="text-h6 font-bold uppercase mb-4">{name}</h3>

      {/* Shop Link */}
      <Link
        to={href}
        className="inline-flex items-center gap-2 text-subtitle font-bold uppercase text-muted-foreground hover:text-brand-orange transition-colors group"
      >
        SHOP
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default CategoryCard;
