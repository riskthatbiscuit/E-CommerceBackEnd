const sequelize = require("../config/connection");
const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = async () => {
  await sequelize.sync({ force:true});
  
  const category = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedCategories;
