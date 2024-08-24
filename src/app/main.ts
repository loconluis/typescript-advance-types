import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'Product 1',
  createdAt: new Date(),
  stock: 100,
  size: 'L',
  category: {
    id: 2,
    name: 'c1',
  },
});
