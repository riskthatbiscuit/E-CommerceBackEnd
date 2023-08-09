const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
    try {
      const tagData = await Tag.findAll({
        // This will retrieve every category's associated Product data. In SQL, this would be a JOIN function.
        include: [{ model: Product }],
      });

      if (!tagData) {
        res.status(404).json({ message: "Tag not found" });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
