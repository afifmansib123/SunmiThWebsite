export interface IProduct {
  category: string;
  description: string;
  hero_images: {
    mobile: string;
    desktop: string;
  };
  series: ISeries[];
}

export interface ISeries {
  id: number;
  name: string;
  description: string;
  seriesId: number;
  products: IProductItem[];
}

export interface IProductItem {
  feturesImage: string;
  name: string;
  title: string;
  price: number;
  slug: string;
  id?: number;
  stocks?: number;
  images?: string[];
}
