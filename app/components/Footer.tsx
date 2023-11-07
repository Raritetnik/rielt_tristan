export default function Footer() {
    return (
      <footer className="text-white border-t-2 border-primary py-10">
        <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 max-w-[1600px] py-6">
          <div >
            <h2 className="decor-text text-5xl inline-flex" >
              <img src="./assets/realtor-96.png" className="w-30 h-30 aspect-auto" alt="Realtor icon" />
              Tristan<br/>Barbeau</h2>
          </div>
          <div className="border-s-2 border-primary px-6">
            <h2 className="uppercase pb-4">Contactez-nous</h2>
            <p>3611 autoroute Laval Ouest</p>
            <p>Laval, H7P 5P6, QC</p>
            <p>(450) 978-2582</p>
          </div>
          <div className="flex flex-col border-s-2 border-primary px-6">
            <h2 className="uppercase pb-4">Liens</h2>
            <a href="">Accueil</a>
            <a href="">À propos</a>
            <a href="">Évaluez votre maison</a>
            <a href="">Contact</a>
          </div>
          <div className="border-s-2 border-primary px-6">
            <img src="./assets/propio_direct.png" alt="Propio Direct" />
            <div className="flex gap-2">
              <img src="#" alt="facebook" />
              <img src="#" alt="instagram" />
              <img src="#" alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1600px] flex justify-between border-t-2 border-primary pt-6">
          <h3>Tristan Barbea</h3>
          <h3>©2023 All rights reserved</h3>
        </div>
      </footer>
    )
}