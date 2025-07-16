"use server";

import { IAPIResponse, IProduct } from "@/types/productT";
import { ContactForm } from "../schemas/sunmi-v3.schema";

export async function postGoogleSheetAPIV3(payload: ContactForm) {
  try {
    const formattedPayload = {
      ...payload,
      notify: payload.notify ? "✅ Yes" : "❌ No",
    };
    const response = await fetch(
      `${process.env.GOOGLE_SHEET_API_URL_V3}?action=addUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedPayload),
      }
    );


    if (!response.ok) {
      return false;
    }

    const res = await response.text();
    return res === "success";
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getProductsByIds(
  ids: string[]
): Promise<IProduct[] | null> {
  try {
    const query = ids.join(",");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product/by-ids?ids=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600, // 1 hour
        },
      }
    );

    if (!res.ok) {
      return null;
    }

    const data: IAPIResponse<IProduct> = await res.json();

    if (!data.data || !Array.isArray(data.data)) {
      return null;
    }

    return data.data;
  } catch (err) {
    console.error("Error fetching products:", err);
    return null;
  }
}
