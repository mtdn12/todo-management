const router = require("express").Router();
const passport = require("passport");

// Require History model
const History = require("../../Models/History");
// Require Todo model
const Todo = require("../../Models/Todo")

router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  async (req, res) => {
    try {
      const page = +req.query.page || 0
      const limit = +req.query.limit || 1000
      const totalCount = await History.countDocuments()
      const history = await History.find({
        user: req.user.id
      }).skip(page * limit).limit(limit).sort('-addAt').populate("list", ["text", "completed", 'createdAt'])
      if (!history) throw new Error()
      // Get general info about todos
      const todos = await Todo.find({
        user: req.user.id
      })
      const totalTodos = todos.length
      const successTodos = todos.filter(todo => todo.completed === true).length
      const successRate = (successTodos/totalTodos)*100
      const generalInfo = {
        totalTodos,
        successTodos,
        successRate,
      }
      return res.status(200).json({
        result: 'Success',
        status: 200,
        message: "Get list history success",
        items: history,
        totalCount,
        generalInfo,
      })
    } catch (error) {
      // console.log(error)
      return res.json({        
        result: "fail",
        status: 400,
        message: "Can't get list todos"
      });
    }
  }
);

module.exports = router;