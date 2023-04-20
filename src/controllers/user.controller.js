const userCtrl = {}



userCtrl.renderSingUpForm = (req, res) =>{
    res.render('user/singup')
}

userCtrl.singup = async (req, res) =>{
    
    const {name, email, password, confirm_password} = req.body
    if (password !== confirm_password) {
        errors.push({ text: "Passwords do not match." });
      }
    
      if (password.length < 4) {
        errors.push({ text: "Passwords must be at least 4 characters." });
      }
    
      }


userCtrl.renderLogInForm = (req, res) =>{
    res.render('user/login')
}

userCtrl.login = (req, res) =>{
    res.send('login')
}

userCtrl.logout = (req, res) =>{
    res.send('logut')
}

module.exports = userCtrl