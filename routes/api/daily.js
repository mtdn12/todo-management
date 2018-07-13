const router = require('express').Router()
const pasport = require('passport')

// Require Default model

const Daily = require('../../Models/Daily')

// validation
const validateTodoInput = require("../../validation/todo")

// @routes  POST: api/defaults/
// desc: add default todos
// acess: private
router.post('/',pasport.authenticate('jwt',{session: false}), async(req, res)=>{
  try {
    const {errors, isValid} = validateTodoInput(req.body)
    if(!isValid) return res.json({
      result: 'fail',
      status: 400,
      message: errors.text || "Can't add default"
    })
    const daily = await Daily.findOne({
      user: req.user.id
    })
    if( !daily ){
      const newDaily = new Daily({
        user: req.user.id,
        list:[{text: req.body.text}]
      })
      const daily = await newDaily.save()
      return res.json({
        result:'success',
        status: 200,
        message: "add Default success",
        item: daily,
      })
    }
    daily.list.unshift({
      text: req.body.text
    })
    const newDaily = await daily.save()
    return res.json({
      result:'success',
      status: 200,
      message: "add Default success",
      item: newDaily,
    })
    
  } catch (error) {
    // console.log(error)
    return res.json({
      result: 'fail',
      status: 400,
      message: "Can't add default"
    })
  }
})

// @routes  Delete: api/dailys/:daily_id
// desc: add Daily todos
// acess: private

router.delete('/:daily_id',pasport.authenticate('jwt',{session:false}), async(req, res)=>{
  try {
    const daily = await Daily.findOne({
      user: req.user.id
    })
    if(!daily) return res.json({
      result: 'fail',
      status: 404,
      message: "You don't have any Daily"
    })
    const index = daily.list.findIndex(o => o.id === req.params.daily_id)
    if(index === -1) throw new Error()
    daily.list.splice(index, 1)
    const newDaily = await daily.save()
    return res.json({
      result: 'success',
      status: 200,
      message: "Delete daily success",
      item: newDaily
    })
  } catch (error) {
    return res.json({
      result:'fail',
      status: 400,
      message: "Can't delete Daily now"
    })
  }
})

// @routes  GET: api/dailys/
// desc: Get Daily todos
// acess: private

router.get('/',pasport.authenticate('jwt',{session:false}), async(req, res)=>{
  try {
    const daily = await Daily.findOne({
      user: req.user.id
    })
    if(!daily) throw new Error()
    return res.json({
      result: 'success',
      status: 200,
      message: "Get daily success",
      item: daily
    })
  } catch (error) {
    return json({
      result: 'fail',
      status: 400,
      message: "Can't get daily now"
    })
  }
})


module.exports = router