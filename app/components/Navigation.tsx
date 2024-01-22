import { useState } from "react";
import Menu from "./Menu";

export default function Navigation(props: any) {
  return (
    <header className="w-full py-2 z-[2] px-1 md:px-2 lg:px-4 text-white border-b-2 border-primary">
      <div className="mx-auto flex justify-between max-w-[1920px] items-center py-2" >
        <h2 className="decor-text text-5xl inline-flex" >
          <img src="./assets/realtor-96.png" className="w-12 h-12 aspect-auto" alt="Realtor icon" />
          Tristan Barbeau</h2>
        <h2 className="bg-white rounded-full py-2 px-6 me-4 border-black border-2 inline-block text-black text-xl">514-555-2525</h2>
      </div>

      {/* Menu Bar */}
      <Menu></Menu>
    </header>
  )
}