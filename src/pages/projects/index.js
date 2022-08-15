import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

const Projects = ({ data }) => {
  console.log("data for Page:>> ", data);
  const projects = data.projects.nodes;
  const { contact } = data.contact.siteMetadata;

  const handleEmailClick = () => {
    navigator.clipboard.writeText(contact);
  };
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Projects</h1>
        <h2>Portfolio</h2>
        <div className={styles.projects}>
          {projects.map((project) => {
            const { slug, stack, title, thumb } = project.frontmatter;
            const image = thumb?.childImageSharp?.gatsbyImageData;
            return (
              <Link to={"/projects/" + slug} key={slug}>
                <div className={styles.Project__Info}>
                  <GatsbyImage
                    image={image}
                    alt="Banner.png"
                  ></GatsbyImage>
                  <h3>{title}</h3>
                  <p>{stack}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <p>
          Like what you see ? Email me at{" "}
          <span
            data-title="copy"
            className="secondary_color cursor_pointer"
            onClick={handleEmailClick}
          >
            {contact}
          </span>{" "}
          for more info !
        </p>
      </div>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
