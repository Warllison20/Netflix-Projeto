
const controllerHome = {
    index: (req, res)=> {
        res.render("Home", {title: "Home"})
      },

}

module.exports = controllerHome