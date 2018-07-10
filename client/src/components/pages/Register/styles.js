const styles = theme => ({
  bg: {
    minHeight: `calc(100vh - 64px)`,
    background: 'linear-gradient(to right, #41295a, #2f0743)',
    color: theme.palette.common.white,
    padding: 30,
    position: 'relative',
  },
  formContent: {
    padding: 20,
    marginTop: 30,
    maxWidth: 800,
    margin: '0 auto',
    color: theme.palette.common.white,
    borderRadius: 30,
    background: theme.palette.common.white,
  },
  btnWrapper: {
    textAlign: 'center',
    '& a:last-child': {
      marginLeft: 20,
      textDecoration: 'none',
    },
  },
})

export default styles
