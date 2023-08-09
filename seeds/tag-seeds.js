const sequelize = require("../config/connection");
const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "rock music",
  },
  {
    tag_name: "pop music",
  },
  {
    tag_name: "blue",
  },
  {
    tag_name: "red",
  },
  {
    tag_name: "green",
  },
  {
    tag_name: "white",
  },
  {
    tag_name: "gold",
  },
  {
    tag_name: "pop culture",
  },
];

const seedTags = async () => {
  await sequelize.sync();

  const category = await Tag.bulkCreate(tagData, {
    individualHooks: true,
    returning: true,
  });

  // for (const { id } of readers) {
  //   const newCard = await LibraryCard.create({
  //     reader_id: id,
  //   });

  // process.exit(0);
};

module.exports = seedTags;
