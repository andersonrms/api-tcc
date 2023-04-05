import Product from '../models/Product';

class ProductController {
  async create(req, res) {
    try {
      const newProduct = await Product.create(req.body);

      return res.status(200).json(newProduct);
    } catch (e) {
      return res.status(400).json({ errors: e.errors?.map((err) => err.message) });
    }
  }

  async list(req, res) {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products);
    } catch (e) {
      return res.status(400).json({ errors: e.errors?.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      return res.status(200).json(product);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });

      const product = await Product.findByPk(id);
      if (!product) return res.status(400).json({ errors: ['product does not exists'] });

      const productUpdated = await product.update(req.body);
      return res.status(200).json(productUpdated);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });

      const product = await Product.findByPk(id);
      if (!product) return res.status(400).json({ errors: ['product does not exists'] });

      await product.destroy();

      return res.status(200).json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new ProductController();
