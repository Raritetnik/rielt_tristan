import Section from "../../components/Section";

export default function Evaluation() { 
    return(
        <Section bgStyle={{ backgroundColor: "black" }} sectStyle={{ flexDirection: 'row', position: 'relative'}}>
        <div className="w-full flex flex-col items-center text-white">
          <div className="p-24 flex flex-col gap-4">
            <h1 className="text-3xl font-semibold uppercase border-s-2 ps-6">Contactez-moi</h1>
            <h3 className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore enim iste natus placeat possimus ratione sed sint sit vitae!</h3>
            <form action="" className="formulaire flex flex-col w-full gap-5">
              <span className='flex flex-col'>
              <label htmlFor="prenom">Adresse de la propriété:</label>
                <input type="text" name="prenom" id="prenom" />
              </span>
              <span className='flex flex-col'>
              <label htmlFor="prenom">Votre nom:</label>
                <input type="text" name="prenom" id="prenom" />
              </span>
              <span className='flex flex-col'>
              <label htmlFor="prenom">Téléphone:</label>
                <input type="text" name="prenom" id="prenom" />
              </span>
              <span className='flex flex-col'>
              <label htmlFor="prenom">Courriel:</label>
                <input type="text" name="prenom" id="prenom" />
              </span>
              <label htmlFor="message">Message: <br/>
                <textarea name="message" className="w-full min-h-[120px]" id="message"/></label>
              <input type="submit" className="btn-primal self-start bg-primary" value="Envoyer message" />      
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src="./assets/jane-palash-KnXDtTbcZ8g-unsplash.png" alt="Banniere maison image" className="object-cover w-full max-h-[1000px]"/>
        </div>
        </Section>
    )
}