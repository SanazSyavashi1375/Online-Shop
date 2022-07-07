type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
  totalPrice?: number;
  quantity?: number;
};

export default product;
