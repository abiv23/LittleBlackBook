var bcrypt = require('bcrypt');

module.exports = {
    encrypt: function(password) {
        return bcrypt.hash(password, 10).then(hash => {
          return hash;
        })
    },
    decrypt: function(hash, plainText) {
      return bcrypt.compare(plainText, hash, function(err, res) {
            if (res === true) {
                console.log('Correct Password!');
            } else console.log('Wrong Password');
        });

    }

}
