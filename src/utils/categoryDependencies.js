import CreateCategoryRouter from '../routes/category.route.js'
import { CategoryController } from '../controllers/category.controller.js'
import { CategoryService } from '../services/category.service.js'
import { CategoryRepository } from '../repositories/categories.repository.js'

const categoryRepository = new CategoryRepository()
const categoryService = new CategoryService({ CategoryRepository: categoryRepository })
const categoryController = new CategoryController({ CategoryService: categoryService })
const categoryRouter = CreateCategoryRouter({ CategoryController: categoryController })

export default categoryRouter;