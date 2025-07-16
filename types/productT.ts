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

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  sellingPrice: string;
  images: string[];
  isDeleted: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAPIResponse<T> {
  errorCode: string;
  httpsStatus: number;
  successful: boolean;
  message: string;
  data: T;
}