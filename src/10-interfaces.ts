type Sizes = 'S' | 'M' | 'L' | 'XL';

// use interface when complex object structs needs to be define
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}
