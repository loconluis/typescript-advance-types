import { Product } from './product.model';

export interface CreateProduct
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface UpdateProduct extends Partial<CreateProduct> {} // changes the structure from required to not
// Required<INTERFACE> keyword changes from not required to explicit required

// Using readonly keyword
export interface GetProductsByOptions
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags?: ReadonlyArray<string>;
}
