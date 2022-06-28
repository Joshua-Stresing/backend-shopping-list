const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    const item = await Item.getById(req.params.id);
    if (!item || item.user_id !== req.user.id) {
      throw new Error('You dont have auth to view this page.');
    }
    next();
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
