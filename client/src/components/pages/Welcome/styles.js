const styles = theme => ({
  bg: {
    minHeight: `calc(100vh - 64px)`,
    background: 'linear-gradient(to right, #41295a, #2f0743)',
    color: theme.palette.common.white,
    padding: 30,
    position: 'relative',
  },
  container: {
    maxWidth: 1200,
    margin: '50px auto',
    // background: theme.palette.common.white,
    borderRadius: 10,
    textAlign: 'center',
    padding: 50,
  },
  btnWrapper: {
    marginTop: 20,
    '&  button:first-child': {
      marginRight: 40,
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
})

export default styles
