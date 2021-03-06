const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../../config/keys')

// Load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// Load User Model
const User = require('../../Models/User')

// @Route Post api/users/register
// @desc Resiger User for app
// @acces public

router.post('/register', async(req, res) => {
  try {
    const { errors , isValid } = validateRegisterInput(req.body)
    if(!isValid){
      return res.json({
        result: 'fail',
        status: 400,
        message: errors.name || errors.email || errors.password || errors.password2 || ' '
      })
    }
    const user = await User.findOne({
      email: req.body.email
    })
    if(user){
      return res.json({
        result: 'fail',
        status: 400,
        message: "Email already exist"
      })
    }
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    })
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async(err, hash)=>{
        if(err) throw err
        newUser.password = hash
        const user = await newUser.save()
        return res.json({
          result: 'success',
          message: 'Register User success',
          item: user
        })
      })
    })
  } catch (error) {
    return res.json({
      result: 'fail',
      status: 400,
      message: "Can't register user"
    })
  }
})

// @Route Post api/users/login
// @desc Login User into app
// @acces public
router.post('/login', async(req, res) => {
  try {
    const {errors, isValid} = validateLoginInput(req.body)
    // console.log(errors)
    if(!isValid) return res.json({
      result:'fail',
      status: 404,
      message: errors.email || errors.password || "Something went wrong"
    })
    const user = await User.findOne({
      email: req.body.email
    })
    if(!user){
      errors.email = "Can't find that email"
      return res.json({
        result: 'fail',
        status: 400,
        errors
      })
    }
    //Check password
    // console.log(user.password)
    const check = await bcrypt.compare(req.body.password,user.password)
    if(!check) {
      return res.json({
        result: 'fail',
        status: 401,
        message: "Password incorect"
      })
    }
    const payload = {
      id: user.id,
      name:user.name
    }
    jwt.sign(payload, keys.secretOrKey, {
      expiresIn: 3213021933231
    }, (err, token)=>{
      if(err) throw err
      res.json({
        result: 'success',
        token: `Bearer ${token}`,
        message: 'Login success'
      })
    })
  } catch (error) {
    // console.log(error)
    return res.json({
      result: 'fail',
      status: 400,
      message: "Can't login"
    })
  }
})


module.exports = router