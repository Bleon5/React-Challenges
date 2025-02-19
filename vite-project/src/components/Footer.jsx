function Footer() {
  const handleClick = (e) => {
    console.log(e);
    alert("One of our students says hi");
  };
  return (
    <footer className="footer">
      <h2>logo</h2>
      <button onClick={handleClick}>Click Me !</button>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
