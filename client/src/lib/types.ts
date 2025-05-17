export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
}

export interface CatalogueItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  pdfUrl: string;

}

export interface CatalogueItemDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  mainImage: string;
  pdfUrl: string;
  additionalImages: string[];
  designElements: string[];
  projectDetails: {
    [key: string]: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  linkedin?: string;
  instagram?: string;
}
