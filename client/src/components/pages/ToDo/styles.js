const styles = theme => ({
  bg: {
    minHeight: `calc(100vh - 64px)`,
    background: 'linear-gradient(to right, #41295a, #2f0743)',
    color: theme.palette.common.white,
    padding: 30,
    position: 'relative',
  },
  container: {
    padding: '20px 50px',
    marginTop: 30,
    maxWidth: 800,
    margin: '0 auto',
    color: theme.palette.common.white,
    borderRadius: 30,
    background: theme.palette.common.white,
  },
})

export default styles
