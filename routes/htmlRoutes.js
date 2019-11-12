module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index", {
          msg: "Welcome!",
        });
    });

    app.get("*", function(req, res) {
        res.render("404");
      });
    };