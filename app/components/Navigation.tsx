import { useState } from "react";

export default function Navigation(props: any) {
  return (
    <header className="w-full absolute top-0 left-0 py-2 z-[2] px-1 md:px-2 lg:px-4 text-white">
      <div className="mx-auto flex justify-between max-w-[1400px]" >
        <h2 className="decor-text text-3xl" >Tristan Barbeau</h2>
        <h2 className="bg-black rounded-full py-2 px-4 border-white border-2">514-555-2525</h2>
      </div>
    </header>
  )
}