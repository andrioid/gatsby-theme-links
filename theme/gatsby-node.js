exports.createPages = ({ actions, reporter }) => {
  // For the demo. I expect real sites to override this.
  actions.createPage({
    path: "/links",
    component: require.resolve("./src/templates/links.js"),
  })
}
