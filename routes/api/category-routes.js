const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({include: [{model: Product}]});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [ {model: Product} ],
    })
    if (!categoryData) {
      res.status(404).json({message: "no category found with that id"});
      return;
    } else {
      res.status(200).json(categoryData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new category
router.post('/', async (req, res) => {
  try { 
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({message: "no category found with that id"});
      return;
    } else {
      res.status(200).json({message: "Category updated"});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

  // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  const categoryID = req.params.id;

  Category.findByPk(categoryID)
    .then((category) => {
      if(category) {
        Category.destroy({
          where: {id: categoryID}
        })
        .then(() => {
          res.status(200).json({message: "category deleted"});
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      }
    })
});

module.exports = router;
