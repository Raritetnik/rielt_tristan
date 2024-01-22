import Section from "../../components/Section";

import React,{ useState, useEffect } from "react";
export default function Contact() { 
    return(
        <main>
            <Section bgStyle={{ height: '400px', minHeight: '0px' }} sectStyle={{ minHeight: '0px' }}>
                <img src="./assets/Maison_de_bord.png" className="max-h-[400px] w-full object-cover" alt="Maison sur le bord" />
            </Section>
            <Section bgStyle={{ backgroundColor: "black"}} sectStyle={{ flexDirection: 'row', alignItems: 'start', padding: '4rem 0' }}>
            <div className="w-full flex flex-col items-center text-white">
                <div className="p-8 flex flex-col gap-4">
                    <h2 className="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8">Vous voulez plus d'information?</h2>
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
                <div className="w-full p-8 flex flex-col gap-4">
                    <h2 className="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8 mb-6">Contactez-moi</h2>
                    <span className="flex items-center"><img src="./assets/phone_icon.png" alt="phone" width={40} className="pe-2" />514-142-4254</span>
                    <span className="flex items-center"><img src="./assets/mail_icon.png" alt="email" width={40} className="pe-2" />tristanbarbeau@gmail.com</span>
                    <img src="./assets/house-banner.jpg" className="w-[500px] py-6" alt="" />
                </div>
            </Section>
        </main>
    )
}