import { useState } from "react";
import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { 
  ArrowLeft, 
  Check, 
  Search, 
  ArrowRight,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CatalogueItem, CatalogueItemDetail as ItemDetailType } from "@/lib/types";

const CatalogueItemDetail = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const { data: item, isLoading } = useQuery<ItemDetailType>({
    queryKey: [`/api/catalogue-items/${id}`],
  });

  const { data: similarItems = [], isLoading: loadingSimilar } = useQuery<CatalogueItem[]>({
    queryKey: [`/api/catalogue-items/similar/${id}`],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-200 rounded"></div>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-1 bg-gray-200 rounded w-16 my-6"></div>
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h2 className="font-playfair text-3xl font-semibold text-primary">Item not found</h2>
        <p className="mt-4 text-darkText/70">The item you're looking for doesn't exist or has been removed.</p>
        <Link href="/catalogue">
          <Button className="mt-8 bg-accent text-white hover:bg-accent/90">
            Back to Catalogue
          </Button>
        </Link>
      </div>
    );
  }

  const allImages = [item.mainImage, ...item.additionalImages];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <Helmet>
        <title>{item.title} | LUMINA Interior Design</title>
        <meta name="description" content={item.description.substring(0, 160)} />
      </Helmet>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/catalogue">
              <span className="inline-flex items-center text-sm font-montserrat text-accent hover:underline cursor-pointer">
                <ArrowLeft className="mr-2" size={16} /> Back to Catalogue
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div 
                className="detail-image-container relative overflow-hidden mb-6" 
                onClick={() => openLightbox(0)}
              >
                <img 
                  src={item.mainImage} 
                  alt={item.title} 
                  className="w-full h-auto"
                />
                <div className="detail-image-overlay absolute inset-0 bg-primary/30 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 p-3 rounded-full">
                    <Search className="text-primary" size={18} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {item.additionalImages.map((image, index) => (
                  <div 
                    key={index}
                    className="detail-image-container relative overflow-hidden"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <img 
                      src={image} 
                      alt={`${item.title} detail ${index + 1}`} 
                      className="w-full h-auto"
                    />
                    <div className="detail-image-overlay absolute inset-0 bg-primary/30 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white/90 p-2 rounded-full">
                        <Search className="text-primary" size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-accent font-montserrat text-sm tracking-wider uppercase">{item.category}</span>
              <h2 className="font-playfair text-3xl font-semibold text-primary mt-2">{item.title}</h2>
              <div className="w-16 h-px bg-accent my-6"></div>
              
              <div className="prose prose-lg max-w-none text-darkText/80">
                {item.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                
                <h3 className="font-playfair text-xl mt-8 mb-4 text-primary">Design Elements</h3>
                <ul className="space-y-2">
                  {item.designElements.map((element, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-accent mt-1 mr-3" size={16} />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-playfair text-xl mt-8 mb-4 text-primary">Project Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(item.projectDetails).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-medium text-primary">{key}</span>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="px-8 py-3 bg-accent text-white font-montserrat text-sm tracking-wider hover:bg-accent/90 transition-colors">
                    INQUIRE ABOUT THIS STYLE
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 border border-primary text-primary font-montserrat text-sm tracking-wider hover:bg-primary/5 transition-colors"
                >
                  SAVE TO FAVORITES
                </Button>
              </div>
            </div>
          </div>
          
          {!loadingSimilar && similarItems.length > 0 && (
            <div className="mt-20">
              <h3 className="font-playfair text-2xl font-semibold text-primary text-center">Similar Projects</h3>
              <div className="w-16 h-px bg-accent mx-auto my-6"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {similarItems.map((similar) => (
                  <Link key={similar.id} href={`/catalogue/${similar.id}`}>
                    <div className="catalogue-item block relative group cursor-pointer">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          src={similar.imageUrl} 
                          alt={similar.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                      <div className="catalogue-overlay absolute inset-0 bg-primary/30 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 px-6 py-4 text-center">
                          <h3 className="font-playfair text-xl font-medium">{similar.title}</h3>
                          <p className="mt-2 text-sm text-darkText/70">{similar.category}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={allImages[activeImageIndex]} 
              alt={`${item.title} - lightbox view`}
              className="max-h-[80vh] max-w-full object-contain"
            />
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={prevImage}
            >
              <ArrowLeft className="text-white" size={24} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={nextImage}
            >
              <ArrowRight className="text-white" size={24} />
            </button>
            
            <button 
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={closeLightbox}
            >
              <X className="text-white" size={24} />
            </button>
            
            <div className="text-center text-white mt-4">
              {activeImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogueItemDetail;
