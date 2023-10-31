export default function CardHouse(props: any) {
    Intl.NumberFormat()
    let CADollar = new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
  });
    return (
      <article key={props.house.code} className="block border-2 m-2 rounded-xl">
        <img className="rounded-t-xl" src={props.house["imageURL"]} alt="House Image" />
        <div className="p-4">
          <h2 className="text-2xl pb-2" style={{color: 'goldenrod'}}>{props.house["Type"]}</h2>
          <span className="text-lg font-bold">{CADollar.format(props.house['Active price'])}</span>
          <p className="pt-2">{props.house['Description'].substring(0,120)}...</p>
          <button className="primary-button">Voir plus</button>
        </div>
      </article>
    )
}