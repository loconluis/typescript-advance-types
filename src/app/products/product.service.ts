import { simpleFaker, faker } from '@faker-js/faker';

import { Product } from './product.model';
import {
  CreateProduct,
  UpdateProduct,
  GetProductsByOptions,
} from './products.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProduct) => {
  const newProduct: Product = {
    ...data,
    id: simpleFaker.string.uuid(),
    createdAt: simpleFaker.date.anytime(),
    updatedAt: simpleFaker.date.anytime(),
    category: {
      id: simpleFaker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: simpleFaker.date.anytime(),
      updatedAt: simpleFaker.date.anytime(),
    },
  };

  products.push(newProduct);
};

export const updateProduct = (
  id: string | number,
  changes: UpdateProduct
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = { ...prevData, ...changes };

  return products[index];
};

export const getProductsByOptions = (dto: GetProductsByOptions): Product[] => {
  // You cant change values from the DTOP cause is readonly value
  // dto.category  = 2 //not allowed

  return products;
};

export const getProduct = (id: string) => {};

export const removeProduct = (id: string) => {};
