"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RiErrorWarningFill } from "react-icons/ri";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import MainHeader from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import CartContext, { CartContextProps } from "@/context/cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CheckoutDetails from "./CheckoutDetails";
const formSchema = z.object({
  //firstName: z.string().min(2).max(50).optional(),
  //lastName: z.string().min(2).max(50).optional(),
  fullname : z.string().min(2).max(50).optional(),
  streetAddress: z.string().min(2).max(50).optional(),
  town_city: z.string().optional(),
  state_county: z.string().optional(),
  postcode: z.string().min(2).max(50).optional(),
  phone: z.string(),
  email: z.string().email(),
  ship_address: z.boolean().default(false).optional(),
  ship_firstName: z.string().min(2).max(50).optional(),
  ship_lastName: z.string().min(2).max(50).optional(),
  ship_streetAddress: z.string().min(2).max(50).optional(),
  ship_town_city: z.string().min(2).max(50).optional(),
  ship_state_county: z.string().min(2).max(50).optional(),
  ship_postcode: z.string().min(2).max(50).optional(),
  ship_company_name: z.string().min(2).max(50).optional(),
  other_notes: z.string().min(2).max(50).optional(),
  company_name: z.string().min(2).max(50).optional(),
  totalPrice: z.number(),
  products: z.array(
    z.object({
      name: z.string(),
      price: z.number(),
    })
  ),
});

const Checkout = () => {
  const [isOpenCoupon, setIsOpenCoupon] = useState(false);
  const cartContext = useContext(CartContext) as CartContextProps | undefined;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      email: "",
    },
  });

  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 200; // Change this value as needed
  const [cart, setCart] = useState<{ name: string; price: number }[]>([]);
  useEffect(() => {
    if (cartContext) {
      const { cart } = cartContext;
      const newSubtotal = cart.reduce((total, item) => total + item.price, 0);
      const newTotal = newSubtotal + shippingCost;
      setCart(cart);
      setSubtotal(newSubtotal);
      setTotal(newTotal);
      console.log('total is', newTotal);

    }
  }, [cartContext]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = {
      fullname : values.fullname,
      streetAddress: values.streetAddress,
      town_city: values.town_city,
      state_county: values.state_county,
      postcode: values.postcode,
      phone: values.phone,
      email: values.email,
      ship_address: values.ship_address,
      ship_firstName: values.ship_firstName,
      ship_lastName: values.ship_lastName,
      ship_streetAddress: values.ship_streetAddress,
      ship_town_city: values.ship_town_city,
      ship_state_county: values.ship_state_county,
      ship_postcode: values.ship_postcode,
      ship_company_name: values.ship_company_name,
      other_notes: values.other_notes,
      company_name: values.company_name,
      totalPrice: total, // Assuming `total` is available in scope
      products: cart, // Assuming `cart` is available in scope
    };

    // Now you can send `formData` as JSON in your API request
    console.log(JSON.stringify(formData));
  }
  return (
    <div>
      <MainHeader path={"/checkout"} />
      <div className=" container">
        <div className=" py-5">
          <div className=" mb-3 border-[#007cba] border rounded p-4 bg-[#f4f8ff]">
            <div className="flex items-center gap-2">
              <RiErrorWarningFill size={30} className=" text-[#007cba]" />
              <p className=" text-xs font-bold">
                Have a coupon?{" "}
                <button
                  onClick={() => setIsOpenCoupon((prev) => !prev)}
                  className=" text-primary"
                >
                  Click here to enter your code
                </button>
              </p>
            </div>
          </div>

          {isOpenCoupon && (
            <div className=" pb-5">
              <p className=" py-3 text-sm font-roboto font-normal">
                If you have a coupon code, please apply it below.
              </p>
              <div className="   inline-flex items-center gap-4 flex-wrap lg:flex-nowrap">
                <Input
                  className=" block"
                  placeholder="Enter your coupon code"
                />
                <Button className=" block rounded-full">Apply Coupon</Button>
              </div>
            </div>
          )}

          <div className=" border-[#cc1818] border rounded p-4 bg-[#fff0f0]">
            <div className="flex items-center gap-2">
              <RiErrorWarningFill size={30} className=" text-skin-status-700" />
              <p className=" text-xs font-bold">
                The following problems were found:
              </p>
            </div>
            <ul className=" ml-10  list-disc">
              <li className=" text-xs font-roboto ">
                <b>Billing Phone</b> is a required field.
              </li>
              <li className=" text-xs font-roboto ">
                <b>Billing Email address</b> is a required field.
              </li>
            </ul>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 py-6"
            >
              <div className=" flex items-start justify-between gap-10">
                <div className=" space-y-4 basis-full xl:basis-[55%]">
                  <p className="text-base font-bold pb-2 border-b border-slate-950">
                    Billing details
                  </p>
                  
                    <FormField
                      control={form.control}
                      name="fullname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  
                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Add Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div>
                  <p className=" text-sm font-bold">Thailand Adress</p>
                  </div>
                  <FormField
                    control={form.control}
                    name="town_city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Town / City (optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Town / City (optional)
"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="town_city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State / County (optional)</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="m@example.com">
                              m@example.com
                            </SelectItem>
                            <SelectItem value="m@google.com">
                              m@google.com
                            </SelectItem>
                            <SelectItem value="m@support.com">
                              m@support.com
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                                      <FormField
                      control={form.control}
                      name="streetAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                          
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="House number and street name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="streetAddress"
                      render={({ field }) => (
                        <FormItem className=" mt-4">
                          <FormControl>
                            <Input
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  <FormField
                    control={form.control}
                    name="postcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postcode / ZIP (optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Postcode / ZIP (optional)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone <span className=" text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className=" text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ship_address"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0  ">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className=" font-bold">
                            Ship to a different address?
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  {/* show   Ship to a different address? */}
                  {form.watch("ship_address") && (
                    <>
                      <div className=" grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="ship_firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First name (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="shadcn" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ship_lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last name (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="shadcn" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="ship_company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company name (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div>
                        <FormField
                          control={form.control}
                          name="ship_streetAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country / Region (optional)</FormLabel>
                              <p className=" text-sm font-bold">Thailand</p>
                              <FormControl>
                                <Input
                                  placeholder="House number and street name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ship_streetAddress"
                          render={({ field }) => (
                            <FormItem className=" mt-4">
                              <FormControl>
                                <Input
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="ship_town_city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Town / City (optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Town / City (optional)
"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ship_town_city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State / County (optional)</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="m@example.com">
                                  m@example.com
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  m@google.com
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  m@support.com
                                </SelectItem>
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ship_postcode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postcode / ZIP (optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Postcode / ZIP (optional)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  <FormField
                    control={form.control}
                    name="other_notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order notes (optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <CheckoutDetails
                  cart={cart}
                  total={total}
                  shippingCost={shippingCost}
                  subtotal={subtotal}
                  formData={form.getValues()}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
