import { useState } from "react";

export default function Menu(props: any) {
  return (
    <nav className="menu absolute flex left-1/2 -translate-x-1/2 text-white -translate-y-1/2 z-[2]">
        <ul className="flex text-black text-center items-center">
            <li><a href="/">Accueil</a></li>
            <li><a href="/a-propos">À propos</a></li>
            <li><a href="/evaluation">Évaluation maison</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/calculatrice">Calculatrice</a></li>
            <li><a href="/immobilier">Immobiliére</a></li>
        </ul>
    </nav>
  )
}