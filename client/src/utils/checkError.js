const checkErrors = res => {
  if (res.data.result === 'fail') throw new Error(res.data.message)
}

export default checkErrors
