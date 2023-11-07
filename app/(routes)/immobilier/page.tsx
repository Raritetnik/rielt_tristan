'use client' // 👈 use it here

import Section from "@/app/components/Section";
import { dataHouses } from "@/db/houses";

import React,{ useState, useEffect } from "react";
export default function Immobilier() { 

    return(
        <Section bgStyle={{ color: "white" }} sectStyle={{ flexDirection: 'column', padding: '60px 0px' }}>
            <h2 className="self-start text-3xl font-semibold">My listing</h2>
            <div className="grid grid-cols-4 gap-4 max-w-[1500px]">
                {dataHouses.slice(0,4).map(maison => {
                    return(
                        <article key={maison.code} className="bg-white text-black">
                            <img src="" width={300} height={200} className="bg-white" alt="Image maison" />
                            <div className="border-t-2 border-primary p-6">
                                <h2>{maison["Active price"]}</h2>
                                <h3>{maison.Address}</h3>
                            </div>
                            <button className="btn-primal bg-primary">Voir plus</button>
                        </article>
                    )
                })}
            </div>
            <button className="btn-primal self-end bg-primary">Contactez-moi</button>
        </Section>
    )
}

async function loadDatabase() {
    
}