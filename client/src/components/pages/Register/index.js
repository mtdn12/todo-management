import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { object, func, bool } from 'prop-types'
import { Formik } from 'formik'
import styles from './styles'
import Template from '../../templates/Template'
import * as Yup from 'yup'
import { TextField, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Register = ({ classes, isLoading, item, handleRegister }) => {
  return (
    <Template>
      <div className={classes.bg}>
        <Formik
          initialValues={item.toJS()}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email')
              .required('Please input email field'),
            name: Yup.string().required('Pleaes input name field'),
            password: Yup.string()
              .min(6, 'password atleast have 6 characters')
              .max(30, 'Password cant not have over 30 characters')
              .required('Please input password field'),
            password2: Yup.string()
              .oneOf([Yup.ref('password')], 'Password not match')
              .required('Please input confirm password'),
          })}
          onSubmit={values => handleRegister(values)}
          render={({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              className={classes.formContent}>
              <Typography variant="headline" align="center" gutterBottom>
                Register
              </Typography>
              <TextField
                id="name"
                label="Name"
                fullWidth
                helperText={touched.name && errors.name}
                InputProps={{
                  value: values.name,
                  onChange: e => {
                    setFieldValue('name', e.target.value)
                    let errors = Object.assign({}, values.errors)
                    delete errors['name']
                    setFieldValue('errors', errors)
                  },
                  onBlur: handleBlur,
                  error: touched.name && errors.name !== undefined,
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  shrink: true,
                  error: touched.name && errors.name !== undefined,
                }}
              />
              <TextField
                id="email"
                label="Email"
                fullWidth
                helperText={touched.email && errors.email}
                InputProps={{
                  value: values.email,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  error: touched.email && errors.email !== undefined,
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  shrink: true,
                  error: touched.email && errors.email !== undefined,
                }}
              />
              <TextField
                id="password"
                label="Password"
                fullWidth
                helperText={touched.password && errors.password}
                InputProps={{
                  value: values.password,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  error: touched.password && errors.password !== undefined,
                  disableUnderline: true,
                  type: 'password',
                }}
                InputLabelProps={{
                  shrink: true,
                  error: touched.password && errors.password !== undefined,
                }}
              />
              <TextField
                id="password2"
                label="Confirm Password"
                fullWidth
                helperText={touched.password2 && errors.password2}
                InputProps={{
                  value: values.password2,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  error: touched.password2 && errors.password2 !== undefined,
                  disableUnderline: true,
                  type: 'password',
                }}
                InputLabelProps={{
                  shrink: true,
                  error: touched.password2 && errors.password2 !== undefined,
                }}
              />
              <div className={classes.btnWrapper}>
                <Button
                  variant="raised"
                  color="primary"
                  type="submit"
                  disabled={isLoading}>
                  Register
                </Button>
                <Link to="/welcome">
                  <Button variant="outlined">Back</Button>
                </Link>
              </div>
            </form>
          )}
        />
      </div>
    </Template>
  )
}

Register.propTypes = {
  classes: object.isRequired,
  item: object.isRequired,
  isLoading: bool.isRequired,
  handleRegister: func.isRequired,
}

export default withStyles(styles)(Register)
