'use client' // 👈 use it here

import CardHouse from "@/app/components/CardHouse";
import Section from "@/app/components/Section";
import { dataHouses } from "@/db/houses";

import React,{ useState, useEffect } from "react";
export default function Immobilier() { 

    return(
        <Section bgStyle={{ color: "white" }} sectStyle={{ flexDirection: 'column', padding: '60px 0px' }}>
            <div className="flex justify-between w-full px-8">
                <h2 className="self-start text-3xl font-semibold border-s-2 border-primary ps-8">My listing</h2>
                <button className="btn-primal self-end bg-primary">Afficher plus</button>
            </div>
            <div className="grid grid-cols-4 gap-4 px-20 max-h-none">
                {dataHouses.map(maison => {
                    return(
                        <CardHouse house={maison} ></CardHouse>
                    )
                })}
            </div>
        </Section>
    )
}

async function loadDatabase() {
    
}