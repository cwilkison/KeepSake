import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} - A Wilkson Production</p>
    </footer>
  );
}

export default Footer;
