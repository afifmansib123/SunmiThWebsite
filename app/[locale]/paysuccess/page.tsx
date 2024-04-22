"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const MainHeader = dynamic(() => import("@/components/layout/Header"));
import { useEffect, useRef } from "react";


const Paysuccess = () => {
        return (
        <>
            <Head>
                <link rel="icon" href={'/favicon.ico'} />
            </Head>

            <div className='flex justify-center flex-row'>

                <img className="h-auto max-w-full" src="/images/sucess2.png" alt="image description"/>

            </div>
            <div className='flex justify-center flex-row'>
                <p className="mb-10 mt-10 text-lg text-black md:text-xl dark:text-gray-400">Your Payment was Successful</p>
            </div>

            <MainHeader path={"/"} />
        </>
    );
};

export default Paysuccess;
