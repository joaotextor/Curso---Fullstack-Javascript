const bcrypt = require('bcrypt')


const crypto = async (pwd) => {
    const salt = await bcrypt.genSalt()

    const pwdEncrypted = await bcrypt.hash(pwd, salt)

    return pwdEncrypted
}

module.exports = {
    crypto
}