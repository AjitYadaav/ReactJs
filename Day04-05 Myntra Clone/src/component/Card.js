function Card(props) {
  return (
    <div
      className="card"
    >
      {/* <img src="https://cdn.pixabay.com/photo/2025/01/01/15/55/baby-9304008_1280.jpg" height={200}/> */}
      <img src={props.image}  width={200} />
      <div>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop now</h2>
        <h3><span style={{fontWeight:"200"}}>Price</span>:Rs.{props.price}</h3>
      </div>
    </div>
  );
}

export default Card;