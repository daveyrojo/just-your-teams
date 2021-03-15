const User = require('./User');
const Aboutme = require('./Aboutme');

Aboutme.belongsTo(User, {
    foreignKey: 'user_id',
});