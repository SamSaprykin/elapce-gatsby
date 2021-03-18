const path = require('path')
const slugify = require('@sindresorhus/slugify')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  

 /* ======================================================================== */
 
 /* Create pages from Projects Listing Template */
 const projectsListing = new Promise((resolve, reject) => {
  graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            projectName
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reject(result.errors)
    }
    const ProjectsListingData = result.data.allContentfulProject.edges
    const blogCardsPerPage = 12
    const numPages = Math.ceil(ProjectsListingData.length / blogCardsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/projects` : `/projects/${i + 1}`,
        component: path.resolve(`./src/templates/projectListing.js`),
        context: {
          limit: blogCardsPerPage,
          skip: i * blogCardsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    resolve()
  })
})


  
  /* ======================================================================== */
  /* Create pages from Read Page Template */

  const projectPage = new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulProject {
          edges {
            node {
              id
              projectName
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      result.data.allContentfulProject.edges.forEach((edge, index) => {
        const slugProject = slugify(edge.node.projectName)
        createPage({
          path: `/projects/${slugProject}`,
          component: path.resolve(`./src/templates/projectTemplate.js`),
          context: {
            id: `${edge.node.id}`,
            next: edge.next
          },
        })
      })
      resolve()
    })
  })



  return Promise.all([
    projectsListing,
    projectPage
  ])
}



