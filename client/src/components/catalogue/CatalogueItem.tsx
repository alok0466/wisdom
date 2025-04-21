import { Link } from "wouter";
import { CatalogueItem as CatalogueItemType } from "@/lib/types";

interface CatalogueItemProps {
  item: CatalogueItemType;
}

const CatalogueItem = ({ item }: CatalogueItemProps) => {
  return (
    <Link href={`/catalogue/${item.id}`}>
      <a className="catalogue-item block relative group cursor-pointer">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="catalogue-overlay absolute inset-0 bg-primary/30 opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 px-6 py-4 text-center">
            <h3 className="font-playfair text-xl font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-darkText/70">{item.category}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CatalogueItem;
