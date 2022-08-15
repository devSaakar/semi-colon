import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const {title} = data.site.siteMetadata;
  return (
    <nav>
    <div className="Logo__Container">
      <div className="My__Logo">
        ;
      </div>
      <h1 className="Company__Name">{title}</h1>
    </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
