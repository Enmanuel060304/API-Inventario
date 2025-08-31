import { ProductRepository } from "../../repositories/product.repository.js";
import { ProductService } from "../../services/products.service.js";
import { ProductsController } from "../../controllers/products.controller.js";
import createProductsRouter from "../../routes/products.route.js";

const productRepository = new ProductRepository();
const productService = new ProductService({ ProductRepository: productRepository });
const productsController = new ProductsController({ ProductService: productService });
const productsRouter = createProductsRouter({ ProductsController: productsController });

export default productsRouter;
