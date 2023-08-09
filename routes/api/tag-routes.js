const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ["product_name"],
          through: { attributes: [] },
        },
      ],
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

// get one tag
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["product_name"],
          through: { attributes: [] },
        },
      ],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      tag_name: "gold",
    }
  */
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((tag) => {
        return res.json(tag);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedTag) => {
        res.json(deletedTag);
      })
      .catch((err) => res.json(err));
});

module.exports = router;
