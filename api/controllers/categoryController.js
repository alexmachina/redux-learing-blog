let categoryModel = require('../models/categoryModel')

class CategoryController {
  getCategories(req, res) {
    let page = req.param('page')
    let findCategories = categoryModel.find()
      .skip((page -1) * 5).limit(5).find().exec()

    let findCategoriesCount = categoryModel.count({})
    let operations = [findCategories, findCategoriesCount]

    Promise.all(operations).then(results => {
      let categories = results[0]
      let count = results[1]
      res.json({categories, count})
    }).catch(error => res.status(500).send(err))
  }

  getCategory(req, res) {
    let query = req.body

    let findCategory = categoryModel.find(query).exec()
    findCategory.then(category => res.json(category))
    findCategory.catch(err => res.status(500).send(err))
  }

  addCategory(req, res) {
    let category = new categoryModel(req.body)

    category.save()
      .then(() => res.send())
      .catch(err => res.send(err))
    
  }

  updateCategory(req, res) {
    let updateCategory = 
      categoryModel.findByIdAndUpdate(req.params.id, 
        {$set: req.body}).exec()

    updateCategory.then(() => res.send())
    updateCategory.catch(err => res.status(500).send(err))
  }
}

module.exports = new CategoryController()
