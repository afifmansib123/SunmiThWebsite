"use client";

import React, { useState } from 'react';

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { FC } from "react";

interface CheckoutDetailsProps {
  cart: CartItem[]; // Assuming you have a CartItem type/interface
  total: number;
  shippingCost: number;
  subtotal: number;
  formData: any; 
}

interface CartItem {
  name: string;
  price: number;
}
const CheckoutDetails: FC<CheckoutDetailsProps> = ({
  cart,
  total,
  shippingCost,
  subtotal,
  formData,
}) => 


{


  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);


    try {
      const url = 'https://payment.miqly.dev/2c2p/sunmith';
      const headers = {
        'Content-Type': 'application/json'
      };
      const body = JSON.stringify({
        invoiceNo: 'INV123',
        description: 'Payment for goods',
        amount: subtotal + shippingCost,
        formData: formData,
      });

      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });

      if (!response.ok) {
        throw new Error('Failed to make payment request');
      }

      const responseData = await response.json();

      console.log(responseData.data.webPaymentUrl);
      window.location.href = responseData.data.webPaymentUrl;
    } catch (error) {
      console.error('Payment error');
      // Handle error appropriately, e.g., show error message to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" basis-full border-2 p-4 border-slate-200 xl:basis-[45%]">
      <div>
        <h2 className=" pb-3 text-sm xl:text-base font-roboto font-bold text-slate-950">
          Your order
        </h2>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product </TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">฿{item.price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-medium">Subtotal</TableCell>
                <TableCell className="text-right">฿{subtotal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Shipping</TableCell>
                <TableCell className="text-right">
                  Flat rate: ฿{shippingCost}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Total</TableCell>
                <TableCell className="text-right">฿{total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className=" py-3">
            <p className=" pb-2 text-sm font-roboto">
              Credit / Debit Card and Cash Payment (2C2P)
            </p>
            <h3 className=" relative text-sm hjhgjhgj font-roboto bg-gray-100 p-4">
              Pay Securely by Credit / Debit card or Internet banking through
              2C2P.
            </h3>
          </div>
          <p className=" py-2 text-sm font-normal font-roboto">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <Link className=" text-primary" href={"/"}>
              privacy policy.
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className=" flex w-full" type="submit" onClick={handlePayment}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutDetails;
