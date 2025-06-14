function Footer(){
  const year = new Date().getFullYear();
  return(
    <div className="Footer">
      <p>© {year} Ajit Yadav. All rights reserved.</p>
    </div>
  )
}

export default Footer;