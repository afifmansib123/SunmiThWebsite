"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Address, Province } from "@/types/address";
import Image from "next/image";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import thaiProvinces from "@/data/thai-address/thai_provinces.json";
import { useLocale } from "next-intl";
import { getLocalizedData } from "@/lib/utils";
import { sunmiV3Data } from "@/data/sale-page/sunmi-v3.data";
import Autocomplete from "@/components/ui/auto-complete-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ContactForm,
  getContactFormSchema,
} from "@/lib/schemas/sunmi-v3.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { postGoogleSheetAPIV3 } from "@/lib/v3/googleSheetAPI";
import useFormStatus from "@/data/hooks/useFormStatus";

export default function Register() {
  const [provinces] = useState<Province[]>(thaiProvinces);
  const [selected, setSelected] = useState<Address>({});
  const locale = useLocale();
  const contactData = getLocalizedData(locale, sunmiV3Data);
  const { state, dispatch } = useFormStatus();

  function handleProvinceSelect(provinceId: string) {
    const id = parseInt(provinceId, 10);
    form.setValue(
      "province",
      locale === "th" ? provinces[id - 1].name_th : provinces[id - 1].name_en
    );
    form.clearErrors("province");
    setSelected({
      province_id: id,
    });
  }

  async function onSubmit(payload: ContactForm) {
    dispatch({ type: "LOADING" });
    const res = await postGoogleSheetAPIV3(payload);
    console.log("API response:", res); 
    
    if (res) {
      dispatch({ type: "SUCCESS" });
      toast.success("Successfully submitted!");
      form.reset();
      setSelected({
        province_id: undefined,
      });
    }
    if (!res) {
      dispatch({
        type: "ERROR",
        payload: "Failed to submit, please try again later.",
      });
      toast.error("Failed to submit, please try again later.");
    }
  }

  const form = useForm<ContactForm>({
    resolver: zodResolver(getContactFormSchema()),
    defaultValues: {
      name: "",
      phone: "",
      province: "",
      received: "",
      notify: false,
    },
  });
  return (
    <section className="container w-full py-10 mb-4">
      <main className="w-full h-auto">
        <div className=" w-full flex rounded-2xl overflow-hidden shadow-xl h-auto">
          {/* frame picture */}
          <div className="w-auto sm:w-1/2 min-w-[300px] relative hidden sm:flex ">
            <Image
              src="/images/products/bg-register.png"
              alt="Register"
              width={520}
              height={960}
              className="object-cover"
            />
          </div>
          <FormProvider {...form}>
            {/* form */}
            <form
              // className="w-full sm:w-1/2 lg:w-[640px] lg:pr-[60px] xl:w-[800px] xl:pr-[100px] py-[90px] sm:py-[10px] md:py-[50px] sm:px-[20px] md:px-[40px] px-[21px] lg:pt-20"
              className="w-full p-[1.5rem] md:p-[3rem] lg:p-[4rem]"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="">
                <p className="text-gray-600 text-[24px] sm:text-[19px] text-center font-bold">
                  ลงทะเบียนเพื่อให้พนักงาน{" "}
                  <span className="text-primary">SUNMITH</span> ติดต่อกลับ
                </p>
              </div>

              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <input
                          {...field}
                          placeholder="ชื่อ-นามสกุล"
                          className="min-h-[60px] shadow-none rounded-xl h-auto w-full px-3 bg-[#F5F5F5] placeholder:text-[#78716C]"
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
                    <FormItem className="w-full mt-4">
                      <FormControl>
                        <input
                          {...field}
                          placeholder="เบอร์โทรศัพท์"
                          className="min-h-[60px] shadow-none rounded-xl h-auto w-full px-3 bg-[#F5F5F5] placeholder:text-[#78716C]"
                        />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem className="w-full mt-4">
                      <FormControl>
                        <Autocomplete
                          className={`text-base shadow-none min-h-[60px] rounded-xl h-auto w-full px-3 bg-[#F5F5F5]`}
                          options={provinces.map((province) => {
                            return {
                              value: province.id.toString(),
                              label:
                                locale === "th"
                                  ? province.name_th
                                  : province.name_en,
                            };
                          })}
                          placeholder={"จังหวัด"}
                          onSelect={handleProvinceSelect}
                          selectedValue={selected.province_id?.toString()}
                          label="Province"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="received"
                  render={({ field }) => (
                    <FormItem className="w-full mt-4">
                      <Select
                        key={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={`min-h-[60px] text-base shadow-none 
                          rounded-xl h-auto w-full px-3 bg-[#F5F5F5] 
                          ${field.value ? "text-inherit" : "text-[#78716C]"}`}>
                            <SelectValue
                              placeholder={"ช่องทางที่ได้รับฟอร์มนี้"}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {contactData.received.map((item) => (
                            <SelectItem key={item.label} value={item.value}>
                              {item.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notify"
                  render={({ field }) => (
                    <FormItem className="flex flex-row justify-start space-x-2 space-y-0 items-center mt-4">
                      <FormControl>
                        <Checkbox
                          className="shadow-none rounded-full flex"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="justify-start items-start leading-none space-y-0">
                        <FormLabel className="text-gray text-xs cursor-pointer">
                          {"ท่านได้ยินยอมให้พนักงานติดต่อกลับ"}
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="bg-primary text-white mt-4 w-full min-h-[60px] rounded-xl"
                >
                  Register
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>
    </section>
  );
}
