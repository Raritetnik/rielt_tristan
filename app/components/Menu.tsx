import { useState } from "react";

export default function Menu(props: any) {
  return (
    <nav className="menu absolute flex justify-cente left-1/2 -translate-x-1/2 text-white -translate-y-1/2">
        <ul className="flex text-black">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Évaluer votre maison</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}