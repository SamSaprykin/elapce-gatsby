import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectHeader from "../components/ProjectComponents/ProjectHeader/ProjectHeader"
import ProjectDescription from "../components/ProjectComponents/ProjectDescription/ProjectDescription"
import { useStaticQuery, graphql } from "gatsby"


const ProjectData = {
  name: "Carrer de Mallorca, 401, 08013 Barcelona, Hiszpania",
}

const ObjectPage = ({data}) => {
  
  return (
  <Layout>
      <SEO title="Elapce" keywords={[`Elapce`, `real estate`, `overseas`]} />
      <ProjectHeader images={data.allFile.edges} projectName={ProjectData.name} />
      <ProjectDescription  />
  </Layout>
  )
}


export const query = graphql`
  query ProjectImages {
    allFile(filter: {relativeDirectory: {eq: "project"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ObjectPage
