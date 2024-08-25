import { faker } from '@faker-js/faker';
import {
  addProduct,
  getProductsByOptions,
  products,
  updateProduct,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: '2',
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    isNew: faker.datatype.boolean(),
    price: parseInt(faker.commerce.price(), 10),
    tags: faker.helpers.multiple(faker.commerce.productAdjective, { count: 5 }),
  });
}

// Update
const product = products[0];
updateProduct(product.id, {
  title: 'Update Titlte',
  stock: 80,
});

// Find/ Get products using options
getProductsByOptions({
  stock: 10,
  color: 'red',
});

console.log('products', products);
