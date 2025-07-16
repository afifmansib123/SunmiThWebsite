import * as z from "zod";

export const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
});
export type OptionType = z.infer<typeof optionSchema>;

export function getContactFormSchema() {
  return z.object({
    name: z.string({ required_error: "Required" }).min(3, {
      message: "Required",
    }),
    phone: z
      .string({ required_error: "Required" })
      .min(9, { message: "Phone must contain 9 digits" })
      .max(15, {
        message: "Phone must not exceed 15 digits",
      })
      .refine((value) => /^[0-9]*$/.test(value), {
        message: "Phone must contain only digits",
      }),
    province: z.string({ required_error: "Required" }).min(1, {
      message: "Required",
    }),
    received: z.string({ required_error: "Required" }).min(1, {
      message: "Required",
    }),
    notify: z.boolean().optional(),
  });
}

export type ContactForm = z.infer<
  Awaited<ReturnType<typeof getContactFormSchema>>
>;
