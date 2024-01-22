export default function CardHouse(props: any) {
    Intl.NumberFormat()
    let CADollar = new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
    });

    return (
      <article key={props.house.code} className="text-black bg-white flex flex-col justify-between border-primary border-[1px]">
        <img src={props.house.imageURL} height={200} className="bg-white h-[200px] object-cover" alt="Image maison" />
        <div className="border-t-2 border-primary p-6 h-full flex flex-col gap-2">
            <h2 className="text-3xl text-primary">{CADollar.format(props.house['Active price'])}</h2> 
            <h3>{props.house.Address}</h3>
            <h3>MLS® Number: {props.house.code}</h3>
        </div>
        <button className="btn-primal bg-primary self-start mb-6 ms-6">Voir plus</button>
      </article>
    )
}