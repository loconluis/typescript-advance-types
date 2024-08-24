export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 0,
    isNew: isNew ?? true,
  };
};

// using OR (||) condition has some wierd behavior in this case for the truly and nully values
// using nullish-coalescing (??) just check for undefineds and nulls

console.log('p1', createProduct(122, 2, true));
console.log('p2', createProduct(123));
console.log('p3', createProduct(123, 0, false));
