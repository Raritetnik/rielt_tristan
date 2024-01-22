'use client' // 👈 use it here


import Section from "../../components/Section";

import React,{ useState, useEffect } from "react";
export default function Calculatrice() {
    let [versementMensuel, setVersementMensuel] = useState(0);
    let pretHypothec: number;
    let interet: number;
    let duree: number;
    let freqVersement: string;
    let miseFonds: number;

    const submit = (e: any) => {
        e.preventDefault();
        pretHypothec = e.target.querySelector('#pretHypot').value;
        interet = e.target.querySelector('#tauxInteret').value;
        duree = e.target.querySelector('#amortissement').value;
        freqVersement = e.target.querySelector('#frecVersement').value;
        miseFonds = e.target.querySelector('#miseFond').value;
        let pow = Math.pow( (1+(interet/100/12)), (duree*12))
        setVersementMensuel(pretHypothec*(((interet/100/12)*pow ) / (pow-1)));
    }


    return(
        <main className="max-w-[100%]">
            <Section>
                <form className="border-2 border-primary my-20 w-full lg:max-w-[1540px] flex flex-col" onSubmit={(e) =>submit(e)}>
                    <div className="px-20 pb-10 pt-20 flex flex-col lg:grid lg:grid-cols-2 gap-20 calculatrice">
                        <div className="text-white flex flex-col p-2 gap-4 w-full">
                            <h2 className="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8">Versement régulier</h2>
                            <span className="flex flex-col w-full"><label htmlFor="pretHypot">Montant du prêt hypothécaire:</label>
                            <input type="number" min={10000} max={1000000} name="pretHypot" id="pretHypot" className="w-full" /></span>

                            <div className="flex gap-2 items-end">
                                <span className="flex flex-col w-[calc(50%-.25rem)]"><label htmlFor="tauxInteret">Taux d'intéret</label>
                                <input type="number" min={0.01} max={30}
                                step={0.01} name="tauxInteret" id="tauxInteret" /></span>
                                
                                <span className="flex flex-col w-[calc(50%-.25rem)]"><label htmlFor="amortissement">Période d'amortissement:</label>
                                <input type="number" name="amortissement" id="amortissement" /></span>
                            </div>
                            <div className="flex gap-2 items-end">
                                <span className="flex flex-col w-[calc(50%-.25rem)]"><label htmlFor="freqVersement">Fréquence des versements:</label>
                                <select name="freqVersement" id="freqVersement">
                                    <option value="mens">Par mois</option>
                                    <option value="bisem">Aux 2 semaine</option>
                                    <option value="sem">Par semaine</option>
                                </select>
                                </span>

                                <span className="flex flex-col w-[calc(50%-.25rem)]"><label htmlFor="termes">Mise de fonds:</label>
                                <input type="number" name="miseFonds" id="miseFonds" /></span>
                            </div>
                        </div>

                        <div className="text-white flex flex-col p-2 gap-4 w-full" >
                            <h2 className="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8" >Remboursement anticipé</h2>
                            <span className="flex flex-col"><label htmlFor="rembAnticipe">Montants des remboursements anticipés:</label>
                            <input type="text" name="rembAnticipe" id="rembAnticipe" /></span>

                            <span className="flex flex-col"><label htmlFor="freq">Fréquence:</label>
                            <input type="text" name="freq" id="freq" /></span>

                            <span className="flex flex-col"><label htmlFor="departVersement">À partir du versement:</label>
                            <input type="text" name="departVersement" id="departVersement" /></span>
                        </div>
                    </div>
                    <input type="submit" onSubmit={submit} className="btn-primal self-center bg-primary mb-10" value="Calculer" />
                </form>
            </Section>
            <Section>
                <div className="my-20 flex flex-col w-full lg:max-w-[1540px]">
                    <h2 className="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8">Aperçu des calculs</h2>
                    <table className="calcApercu w-full">
                        <thead>
                        <tr className="w-full">
                            <th className="w-1/3 bg-primary font-bold text-left">Catégorie</th>
                            <td className="w-1/3 bg-primary font-bold">Terme</td>
                            <td className="w-1/3 bg-primary font-bold">Période d’amortissement</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="">
                            <td>Nombre de versements</td>
                            <td>$7902</td>
                            <td>$7902</td>
                        </tr>
                        <tr className="">
                            <td>Versement hypothécaire</td>
                            <td>{versementMensuel}</td>
                            <td>$7902</td>
                        </tr>
                        <tr className="">
                            <td>Remboursement anticipé</td>
                            <td>$7902</td>
                            <td>$7902</td>
                        </tr>
                        <tr className="">
                            <td>Paiement de capital</td>
                            <td>$7902</td>
                            <td>$7902</td>
                        </tr>
                        <tr className="">
                            <td>Paiement de frais d’intérêt</td>
                            <td>$7902</td>
                            <td>$7902</td>
                        </tr>
                        <tr className="">
                            <td>Coût total</td>
                            <td>$7902</td>
                            <td>$7902</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Section>
            <Section>
                <div className="w-full lg:max-w-[1540px]">
                    <h2 className="uppercase self-start text-3xl font-semibold border-s-2 border-primary ps-8 mb-[20px]">Aperçu des calculs</h2>
                    <div className="border-2 border-primary mb-20 px-14 py-8 flex flex-col listeCalc">
                        <h3>Au cours de la période d’amortissement de 25 ans, vous aurez :</h3>
                        <ul>
                            <li className="text-primary"><span className="text-white">Fait 300 versements mensuels (12x par année) de 581,60 $.</span></li>
                            <li className="text-primary"><span className="text-white">Payé 100 000,00 $ en capital, 74 481,50 $ en intérêts, pour un total de 174 481,50 $.</span></li>
                        </ul>

                        <h3>Au cours du terme de 5 ans, vous aurez :</h3>
                        <ul>
                            <li className="text-primary"><span className="text-white">Fait 60 versements mensuels (12x par année) de 581,60 $</span></li>
                            <li className="text-primary"><span className="text-white">Payé 11 492,50 $ en capital, 23403,80 $ en intérêts, pour un total de 34 896,30 $.</span></li>
                        </ul>

                        <h3>À la fin du terme de 5 ans, vous aurez :</h3>
                        <ul>
                            <li className="text-primary"><span className="text-white">Un solde de 88 507,50$.</span></li>
                        </ul>
                    </div>
                </div>
            </Section>
        </main>
    )
}