export interface Product {
  _id: string;
  category: string;
  description: string;
  series: string;
  productHeroImage: {
    Mobile: string;
    title: string;
    description: string;
    Dekstop: string;
  };
  seriesData: {
    seriesTitle: string;
    Description: string;
    products: SingleProduct[];
  };
}

export interface SingleProduct {
  _id: string;
  mainImage: {
    alt: string;
    asset: string;
  };
  productTitle: string;
  subTitle: string;
  price: number;
  currentSlug: string;
}
