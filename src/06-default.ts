// defaults values

export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true
) => {
  return {
    id,
    stock: stock ?? 0,
    isNew: isNew ?? true,
  };
};

console.log('p1', createProduct(122, 2, true));
console.log('p2', createProduct(123));
console.log('p3', createProduct(123, 0, false));
