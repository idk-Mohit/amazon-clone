const loginHelper = (token) => {
    localStorage.setItem('isLoggedIn', 1)
    localStorage.setItem('accessToken', token)
}

const userNameHelper = (username) => {
    localStorage.setItem('username', username)
}

const logoutHelper = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('isLoggedIn')
}

const userHelper = (user) => {
    localStorage.setItem('user', JSON.stringify({ name: user.name, _id: user._id, email: user.email }))
}

export {
    userNameHelper,
    loginHelper,
    logoutHelper,
    userHelper,
}
