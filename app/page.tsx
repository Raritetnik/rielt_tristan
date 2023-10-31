'use client' // 👈 use it here

import Menu from "./components/Menu";
import Section from "./components/Section";

import React,{ useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  const getData = async ()=>{
    fetch('./assets/house.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(response){
        console.log(response)
        return response.json();

      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson['listHouses'].slice(0,4));
      });
    }
    useEffect(()=>{
      getData()
    },[]);

  return (
    <main className="max-w-[100%]">
      {/* Banner Section */}
      <Section bgStyle={{ backgroundColor: "black" }} sectStyle={{ flexDirection: 'row', position: 'relative' }}>
        <div className="w-full flex flex-col items-center text-white">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold">Unreal Properties</h1>
            <h3 className="text-xl">Courtier immobilier résidentiel</h3>
            <button className="btn-primal self-end">Contactez-moi</button>
          </div>
        </div>
        <div className="w-full">
          <img src="./assets/nataliia-kvitovska-2HKJACExHeo-unsplash.jpg" alt="Banniere maison image" className="max-h-[500px] w-full object-cover border-white border-2"/>
        </div>
        <img src="./assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg" className="absolute bottom-0 left-0 aspect-square w-32 object-cover border-white border-2" alt="Mini maison image" />
        </Section>

        {/* Menu Bar */}
        <Menu></Menu>

        {/* Banner Section */}
        <Section bgStyle={{backgroundColor: "black"}} sectStyle={{flexDirection: 'row-reverse'}}>
        <div className="w-full flex flex-col items-center text-white">
          <div className="flex flex-col gap-3 border-s-2 border-white ps-8">
            <h1 className="text-3xl font-semibold uppercase">À propos de moi</h1>
            <p className="max-w-[40ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, commodi? Laborum numquam soluta in harum inventore quas consequuntur illum. Quidem aperiam porro nostrum repellendus! Corporis perferendis atque distinctio doloribus qui.</p>
          </div>
        </div>
        <div className="w-full">
          <img src="./assets/small-house-green-printemps.png" alt="Banniere maison image" className="min-h-[700px] w-full object-cover border-white border-2"/>
        </div>
        </Section>

    </main>
  )
}
