const User = require('./User');
const Selected = require('./Aboutme');

User.hasMany(Selected, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Selected.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Selected,
};