import { uiActions } from './ui-slice';
import { productActions } from './productSlice';
export const fetchProductData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products', { mode: 'cors' });

      if (!response.ok) {
        throw new Error('Could not fetch product data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchData();
      dispatch(
        productActions.replaceCart({
          items: productData || []
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching product data failed!'
        })
      );
    }
  };
};
export default fetchProductData;
