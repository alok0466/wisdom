import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import CatalogueItem from "./CatalogueItem";
import { CatalogueItem as CatalogueItemType } from "@/lib/types";

type CategoryFilter = "All" | "Mark Decor" | "Meridian" | "Decoraids" | "PU Panel" | "Hardware";

const CatalogueGrid = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [visibleItems, setVisibleItems] = useState(6);

  const { data: items = [], isLoading } = useQuery<CatalogueItemType[]>({
    queryKey: ['/api/catalogue-items'],
  });

  const filteredItems = activeFilter === "All" 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    setVisibleItems(6); // Reset visible items when changing filter
  };

  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  const displayedItems = filteredItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < filteredItems.length;

  return (
    <section id="catalogue" className="py-20 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-montserrat text-sm tracking-wider uppercase">Our Portfolio</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mt-3">Design Catalogue</h2>
          <div className="w-24 h-px bg-accent mx-auto my-6"></div>
          <p className="text-darkText/70">Browse our collection of curated interior designs across different styles and spaces.</p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["All", "Mark Decor", "Meridian", "Decoraids", "PU Panel", "Hardware"] as CategoryFilter[]).map((filter) => (
            <Button 
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`px-6 py-2 text-sm font-montserrat tracking-wider ${
                activeFilter === filter 
                  ? "bg-accent text-white" 
                  : "text-primary bg-white shadow-sm hover:bg-accent hover:text-white"
              } transition-colors`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Catalogue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-[3/4] bg-gray-200 animate-pulse"></div>
            ))
          ) : displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <CatalogueItem key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-lg text-darkText/70">No items found for the selected category.</p>
            </div>
          )}
        </div>
        
        {hasMoreItems && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="px-8 py-3 border border-primary text-primary font-montserrat text-sm tracking-wider hover:bg-primary/5 transition-colors"
              onClick={loadMore}
            >
              LOAD MORE
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogueGrid;
