const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get request for all categories found in ecommerce_db
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({include: Product});
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get request for a single category based on it's id
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {include: Product});
    if (!category) {
      res.status(404).json({message: 'Category not found'});
      return;
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post request to create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Put request to update an existing category
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedCategory[0] === 0) {
      res.status(404).json({message: 'Category was not found'});
      return;
    }
    res.json({message: 'Category has been updated'});
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete request to delete an existing category
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedCategory) {
      res.status(404).json({message: 'Category was not found'});
      return;
    }
    res.json({message: 'Category has been deleted'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
