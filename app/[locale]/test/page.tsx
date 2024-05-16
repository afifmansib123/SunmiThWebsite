"use client"
import React, { useEffect, useState } from 'react';

const Test = () => {

    interface ThaiObject {
        name_th: string;
        name_en: string;
    }

    const [amphures , setamphures] = useState<string[]>([]);
    const [province , setprovince] = useState<string[]>([]);
    const [tambons, settambons] = useState<string[]>([])

    useEffect(() => {
        const fetchamphures = async () => {
            try {
                const response1 = await fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/json/thai_amphures.json");
                const response2 = await fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/json/thai_provinces.json");
                const response3 = await fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/json/thai_tambons.json");
                const data1 : ThaiObject[]= await response1.json();
                const data2 : ThaiObject[] = await response2.json();
                const data3 : ThaiObject[]= await response3.json();
                const x1 = data1.map((x: ThaiObject)=> {return x.name_th+"/"+x.name_en})
                const x2 = data2.map((x: ThaiObject)=> {return x.name_th+"/"+x.name_en})
                const x3 = data3.map((x: ThaiObject)=> {return x.name_th+"/"+x.name_en})
                setamphures(x1);
                setprovince(x2);
                settambons(x3);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchamphures();
    }, []);

    return (
        <>
        <h1>amphures</h1>
        <ul>
            {amphures && amphures.map((x)=>(<li>{x}</li>))}
        </ul>
        <h1>province</h1>
        <ul>
            {province && province.map((x)=>(<li>{x}</li>))}
        </ul>
        <h1>tambons</h1>
        <ul>
            {tambons && tambons.map((x)=>(<li>{x}</li>))}
        </ul>
        </>
    );
};

export default Test;
