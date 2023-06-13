const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
router.post('/', async (req, res) => {
  try {
    Tag.create(req.body)
      .then((tag) => {
        res.status(200).json(tag);
      })
  } catch (err) {
    res.status(400).json(err);
  }
});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  const tagID = req.params.id;

  Tag.findByPk(tagID)
    .then((tag) => {
      if(tag) {
        Tag.update(req.body, {
          where: {id: tagID}
        })
        .then(() => {
          res.status(200).json({message: "tag updated"});
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      }
    })
});

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  const tagID = req.params.id;

  Tag.findByPk(tagID)
    .then((tag) => {
      if(tag) {
        Tag.destroy({
          where: {id: tagID}
        })
        .then(() => {
          res.status(200).json({message: "tag deleted"});
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      }
    })
});

module.exports = router;
