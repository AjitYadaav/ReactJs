function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <a href="Home">
          <img src="https://images.indianexpress.com/2021/01/myntra.png" alt="myntra logo" height={50}/>
        </a>
      </div>
      <div className="Navbar">
        <a href="Mens shoping">Men</a>
        <a href="womens shoping">Women</a>
        <a href="kids shopoing ">Kids</a>
        <a href="Home">Home</a>
        <a href="Beauty">Beauty</a>
        <a href="Genz">Genz</a>
        <a href="studio">
          Studio <sup style={{ color: "red" }}>new</sup>
        </a>
      </div>
      <input type="text" placeholder="Search "></input>
      <button
        style={{
          background: "black",
          color: "white",
          border: "none",
          fontWeight: "bold",
          borderRadius: "3px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Header;