import React from "react";
import { graphql, Link } from "gatsby";

import * as styles from "../styles/home.module.css";
import Layout from "../components/Layout";

import {GatsbyImage} from 'gatsby-plugin-image'

const Home = ({data}) => {
  console.log('data  from HOME :>> ', data);
  const image = data.file.childImageSharp.gatsbyImageData;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Semi Colon Ed.</h2>
          <h3>
            Put a <span className={styles.semi__colon}>;</span> to{" "}
            <span className={styles.bugs}>Bugs.</span>{" "}
          </h3>
          <p className={styles.info}>Learn Web Development</p>
          <p>Near Graphic Era, Dehradun</p>
          <Link to="/projects" className={styles.btn}>
            Cources
          </Link>
        </div>
        <GatsbyImage
          image={image}
          alt="Banner.png"
        ></GatsbyImage>
      </section>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED,
            placeholder: BLURRED
)
      }
    }
  }
`;
