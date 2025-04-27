import { Helmet } from "react-helmet";
import CatalogueGrid from "@/components/catalogue/CatalogueGrid";

const CataloguePage = () => {
  return (
    <>
      <Helmet>
        <title>Catalogue | UrbanVision Interior Design</title>
        <meta name="description" content="Browse our collection of curated interior designs across different styles and spaces." />
      </Helmet>
      
      <main className="pt-24">
        <CatalogueGrid />
      </main>
    </>
  );
};

export default CataloguePage;
