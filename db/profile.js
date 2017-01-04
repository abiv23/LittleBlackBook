let knex = require('./knex.js');

module.exports = {

  checkIfProfileExisits: function(profile) {
    return knex('profile').select().where('email', profile.email).first()
  },

  storeNewProfile: function(newProfile) {
    return knex.insert({
      email: newProfile.email,
      password: newProfile.password,
      first_name: newProfile.first_name,
      last_name: newProfile.last_name
    }).into('profile').returning('id').then((id)=>{});
  }


}
