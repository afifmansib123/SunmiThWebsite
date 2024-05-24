"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RiErrorWarningFill } from "react-icons/ri";
import { amphures } from "./amphures.js"
import { provinces } from "./provinces.js"

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
  fullname: z.string().min(2).max(50).optional(),
  streetAddress: z.string().min(2).max(50).optional(),
  amphures: z.string().min(2).max(50).optional(),
  province: z.string().min(2).max(50).optional(),
  tambons: z.string().min(2).max(50).optional(),
  postcode: z.string().min(2).max(50).optional(),
  phone: z.string(),
  email: z.string().email(),
  tax_adress: z.boolean().default(false).optional(),
  tax_input: z.boolean().default(false).optional(),
  ship_address: z.boolean().default(false).optional(),
  ship_name: z.string().min(2).max(50).optional(),
  ship_streetAddress: z.string().min(2).max(50).optional(),
  ship_amphures: z.string().min(2).max(50).optional(),
  ship_province: z.string().min(2).max(50).optional(),
  ship_postcode: z.string().min(2).max(50).optional(),
  ship_company_name: z.string().min(2).max(50).optional(),
  recipient_name : z.string().min(2).max(50).optional(),
  recipient_telephone : z.string().min(2).max(50).optional(),
  recipient_taxidnumber : z.string().min(2).max(50).optional(),
  recipient_taxidnumbercompany : z.string().min(2).max(50).optional(),
  recipient_branchname : z.string().min(2).max(50).optional(),
  recipient_branchnumber : z.string().min(2).max(50).optional(),
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
      fullname: values.fullname,
      streetAddress: values.streetAddress,
      amphures: values.amphures,
      province: values.province,
      tambons: values.tambons,
      postcode: values.postcode,
      phone: values.phone,
      email: values.email,
      tax_adress: values.tax_adress,
      tax_input: values.tax_input,
      ship_address: values.ship_address,
      ship_name: values.ship_name,
      ship_streetAddress: values.ship_streetAddress,
      ship_amphures: values.ship_amphures,
      ship_province: values.ship_province,
      ship_postcode: values.ship_postcode,
      ship_company_name: values.ship_company_name,
      other_notes: values.other_notes,
      company_name: values.company_name,
      recipient_name : values.recipient_name,
      recipient_telephone : values.recipient_telephone,
      recipient_taxidnumber : values.recipient_taxidnumber,
      recipient_taxidnumbercompany : values.recipient_taxidnumbercompany,
      recipient_branchname : values.recipient_branchname,
      recipient_branchnumber : values.recipient_branchnumber,
      totalPrice: total, // Assuming `total` is available in scope
      products: cart, // Assuming `cart` is available in scope
    };

    // Now you can send `formData` as JSON in your API request
    console.log(JSON.stringify(formData));
  }

  const [personaltax, setpersonaltax] = useState(false)

  const [taxtype , settaxtype] = useState("")

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
                    name="amphures"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amphures</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an Amphure" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {amphures && amphures.map((x) => (<SelectItem value={x.name_th} key={x.id}>
                              {x.name_th}/{x.name_en}
                            </SelectItem>))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Province</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Province" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {provinces && provinces.map((x) => (<SelectItem value={x.name_th} key={x.id}>
                              {x.name_th}/{x.name_en}
                            </SelectItem>))}
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
                    name="tax_adress"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0  ">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="flex justify-center leading-none">
                          <FormLabel className="flex font-bold">
                            Request Tax Invoice
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  {form.watch("tax_adress") && (
                    <>
                      <FormField
                        control={form.control}
                        name="tax_input"
                        render={({ field }) => (
                          <FormItem className="flex justify-center ">
                            <FormControl>
                              {!personaltax && (
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                  onClick={() => { setpersonaltax(true) }}
                                >
                                  Add New Adress</button>)}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {personaltax && (<>

                        <div className="flex items-center mb-4">
                          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>{settaxtype("personaltaxtype")}}/>
                          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Personal Tax</label>
                        </div>
                        <div className="flex items-center">
                          <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={()=>{settaxtype("companytaxtype")}}/>
                          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Corporate Tax</label>
                        </div>


                        <form className="max-w-md mx-auto">
                          {taxtype === "personaltaxtype" ? (
                            <>

                            <FormField
                    control={form.control}
                    name="recipient_taxidnumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tax Id Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Tax Id Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                          
                          <FormField
                    control={form.control}
                    name="recipient_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recipients Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Add Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                          <FormField
                    control={form.control}
                    name="recipient_telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telephone</FormLabel>
                        <FormControl>
                          <Input placeholder="Recipient Telephone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                          </>
                          ) : (<>
                          <FormField
                    control={form.control}
                    name="recipient_taxidnumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tax Id Number(Personal)</FormLabel>
                        <FormControl>
                          <Input placeholder="Tax Id Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="recipient_taxidnumbercompany"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tax identification number (Company)</FormLabel>
                        <FormControl>
                          <Input placeholder="Tax Id Number (Company)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="recipient_branchname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Branch Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="recipient_branchnumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Branch Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                          <FormField
                    control={form.control}
                    name="recipient_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recipient Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Recipient Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="recipient_telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telephone</FormLabel>
                        <FormControl>
                          <Input placeholder="Recipient Telephone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                          
                          </>)}
                        </form>

                      </>)}
                    </>)}
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
                      <FormField
                        control={form.control}
                        name="ship_name"
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
                        <p className=" text-sm font-bold">Thailand Adress</p>

                      </div>
                      <FormField
                        control={form.control}
                        name="ship_amphures"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Amphures</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an Amphure" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {amphures && amphures.map((x) => (<SelectItem value={x.name_th} key={x.id}>
                                  {x.name_th}/{x.name_en}
                                </SelectItem>))}
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ship_province"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Province</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a Province" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {provinces && provinces.map((x) => (<SelectItem value={x.name_th} key={x.id}>
                                  {x.name_th}/{x.name_en}
                                </SelectItem>))}
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ship_streetAddress"
                        render={({ field }) => (
                          <FormItem>

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