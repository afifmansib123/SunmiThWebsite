export type Province = {
  id: number;
  name_th: string;
  name_en: string;
  geography_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
};

export type Address = {
  province_id?: number;
};