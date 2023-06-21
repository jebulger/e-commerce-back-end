const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get request to get all tags found in ecommerce_db
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({include: Product});
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get request to get a single tag based on it's id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {include: Product});
    if (!tag) {
      res.status(404).json({message: `Tag couldn't be found`});
      return;
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post request to create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Put request to update an existing tag based on it's unique id
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedTag[0] === 0) {
      res.status(404).json({message: `Tag couldn't be found`});
      return;
    }
    res.json({message: 'Tag has been updated'});
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete request to delete an existing tag based on it's id
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!deletedTag) {
      res.status(404).json({message: `Tag couldn't be found`});
      return;
    }
    res.json({message: 'Tag has been deleted'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
