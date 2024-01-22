import Section from "../../components/Section"

export default function A_propos() {
  return(
    <Section bgStyle={{ background: 'url("./assets/dillon-kydd-3Ignkeds3w8-unsplash.jpg")', backgroundSize: '100%', backgroundPosition: 'center' }}>
      <div className="max-w-[80ch] text-black text-center flex flex-col justify-center my-20 relative">
        <img src="./assets/tristan_profil.png" className="self-center border-2 border-primary rounded-full translate-y-20" width={250} alt="Profile Img" />
        <div className="bg-white px-14 pt-32 pb-24">
          <h2 className="text-3xl pb-5">Tristan Barbeau</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, veritatis! Ex rem itaque voluptate qui accusamus minima eligendi, accusantium voluptatibus doloremque dolorum quas quis temporibus, deleniti ipsa distinctio similique aut amet iusto vel ab quaerat sapiente? A voluptatum, dolor, ipsum architecto numquam totam iure delectus facilis inventore sit odit assumenda quibusdam laudantium saepe! Autem, itaque, inventore quae odio sapiente rerum consequuntur tempora incidunt minima pariatur facere eum nam, iusto tenetur. Pariatur consequatur aperiam perspiciatis blanditiis impedit inventore mollitia repellat sapiente.</p>
        </div>
      </div>
    </Section>
  )
}
  