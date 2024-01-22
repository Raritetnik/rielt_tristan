'use client' // 👈 use it here

import Section from "./components/Section";

export default function Home() {

  return (
    <main className="max-w-[100%]">
      {/* Banner Section */}
      <Section bgStyle={{ backgroundColor: "black", minHeight: '500px' }} sectStyle={{ flexDirection: 'row', position: 'relative' }}>
        <div className="w-full flex flex-col items-center text-white">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold">Unreal Properties</h1>
            <h3 className="text-xl">Courtier immobilier résidentiel</h3>
            <button className="btn-primal self-end bg-primary">Contactez-moi</button>
          </div>
        </div>
        <div className="w-full">
          <img src="./assets/nataliia-kvitovska-2HKJACExHeo-unsplash.jpg" alt="Banniere maison image" className="max-h-[700px] w-full object-cover"/>
        </div>
        <img src="./assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg" className="absolute bottom-0 left-0 aspect-square w-60 object-cover border-primary border-2" alt="Mini maison image" />
        </Section>

        {/* ABOUT Section */}
        <Section bgStyle={{backgroundColor: "black"}} sectStyle={{flexDirection: 'row-reverse'}}>
        <div className="w-full flex flex-col items-center text-white">
          <div className="flex flex-col gap-3 border-s-2 border-primary ps-8">
            <h1 className="text-3xl font-semibold uppercase">À propos de moi</h1>
            <p className="max-w-[40ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, commodi? Laborum numquam soluta in harum inventore quas consequuntur illum. Quidem aperiam porro nostrum repellendus! Corporis perferendis atque distinctio doloribus qui.</p>
          </div>
        </div>
        <div className="w-full">
          <img src="./assets/5.png" alt="Banniere maison image" className="min-h-[700px] w-full object-cover"/>
        </div>
        </Section>

        {/* Profil Section */}
        <Section bgStyle={{ }} sectStyle={{ background: "url('./assets/Maison_de_bord.png')", backgroundSize: '100%', backgroundPosition: 'center', flexDirection: 'row', position: 'relative', gap: '5rem' }}>
          <div className="flex flex-col items-center text-white my-[180px]">
            <img src="./assets/Tristan_Barbeau-_web.png" className="w-52 aspect-square object-cover border-2 border-black rounded-full" alt="Tristan image profile" />
            <h2 className="text-[8rem] leading-none m-0" >+</h2>
          </div>
          <div className="flex gap-4">
            <h2 className="text-[8rem] decor-text text-white">
              Tristan 
              <br/> Barbeau</h2>
          </div>
        </Section>

        {/* Contact Section */}
        <Section bgStyle={{ backgroundColor: "black" }} sectStyle={{ flexDirection: 'row', position: 'relative', height: '700px' }}>
        <div className="w-full flex flex-col items-center text-white">
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-3xl font-semibold uppercase border-s-2 ps-6">Contactez-moi</h1>
            <form action="" className="formulaire flex flex-col w-full gap-5">
              <div className="flex gap-6">
                <span className="flex flex-col">
                  <label htmlFor="prenom">Prénom: <br/>
                  <input type="text" name="prenom" id="prenom"
                  /></label>
                </span>
                <span className="flex flex-col">
                  <label htmlFor="nom">Nom: <br/>
                  <input type="text" name="nom" id="nom"/></label>
                </span>
              </div>
              <div className="flex gap-6">
                <span className="flex flex-col">
                  <label htmlFor="prenom">Courriel: <br/>
                  <input type="text" name="prenom" id="prenom"/></label>
                </span>
                <span className="flex flex-col">
                  <label htmlFor="telephone">Téléphone: <br/>
                  <input type="text" name="telephone" id="telephone"/></label>
                </span>
              </div>
              <div className="flex gap-6">
                <span className="flex flex-row gap-4">
                  <label htmlFor="f_matin" className="form-control"><input type="checkbox" name="matin" id="f_matin" /> Matin</label>
                  <label htmlFor="f_midi" className="form-control"><input type="checkbox" name="midi" id="f_midi" /> Après midi</label>
                  <label htmlFor="f_soir" className="form-control"><input type="checkbox" name="soir" id="f_soir" /> Soir</label>
                  <label htmlFor="f_finSemaine" className="form-control"><input type="checkbox" name="finSemaine" id="f_finSemaine" /> Fin de semaine</label>
                </span>
              </div>
              <label htmlFor="message">Message: <br/>
                <textarea name="message" className="w-full min-h-[120px]" id="message"/></label>
              <input type="submit" className="btn-primal self-start bg-primary" value="Envoyer message" />      
            </form>
          </div>
        </div>
        <div className="w-full p-8 flex justify-center">
          <img src="./assets/les-argonautes-89xlwcDKWEw-unsplash.jpg" alt="Banniere maison image" className="h-[500px] aspect-square object-cover border-white border-2 rounded-tl-full"/>
        </div>
        </Section>
    </main>
  )
}
