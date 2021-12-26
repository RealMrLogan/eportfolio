const path = require('path')
const data = require('./bio.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve('src/templates/Template.tsx')
  const home = path.resolve('src/templates/Home.tsx')
  const work = path.resolve('src/templates/Work.tsx')
  const projects = path.resolve('src/templates/Projects.tsx')
  const skills = path.resolve('src/templates/Skills.tsx')

  Object.entries(data).forEach(([key, values]) => {
    const componentMap = {
      home, work, projects, skills,
    }

    createPage({
      path: key,
      component: componentMap[key] || template,

      // Send additional data to page from JSON (or query inside template)
      context: values,
    })
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
