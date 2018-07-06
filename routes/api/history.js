const router = require("express").Router();
const passport = require("passport");

// Require History model
const History = require("../../Models/History");

router.post(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  async (req, res) => {
    try {
      const history = new History({
        list: req.body.history.map(todo => todo._id)
      });
      const newHistory = await history.save();
      return res.json({
        result: "success",
        status: 200,
        history: newHistory,
        message: "Add history success"
      });
    } catch (error) {
      console.log(error);
      return res.json({
        result: "fail",
        status: 400,
        message: "Can't add history todos"
      });
    }
  }
);

router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  async (req, res) => {
    try {
      const page = +req.query.page || 0
      const limit = +req.query.limit || 1000
      const totalCount = await History.count()
      const history = await History.find().skip(page * limit).limit(limit).sort('-date').populate("list", ["text", "completed", 'createdAt'])
      if (!history) throw new Error()
      return res.status(200).json({
        result: 'Success',
        status: 200,
        message: "Get list history success",
        items: history
      })
    } catch (error) {
      return res.json({
        result: "fail",
        status: 400,
        message: "Can't get list todos"
      });
    }
  }
);

module.exports = router;