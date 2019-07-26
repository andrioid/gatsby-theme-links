exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: "/links",
    component: require.resolve("./src/templates/links.js"),
  })
}
