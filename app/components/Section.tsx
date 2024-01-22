export default function Section(props: any) {
    let bgStyle = props.bgStyle;
    let sectStyle = props.sectStyle;

    return (
      <section style={bgStyle}>
        <div className="min-h-[500px] mx-auto max-w-[1920px] flex justify-center items-center gap-2 lg:gap-10 text-white" style={sectStyle}>{props.children}</div>
      </section>
    )
}
  