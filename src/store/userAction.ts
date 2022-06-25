import { uiActions } from './ui-slice';
import { userActions } from './user';
export const fetchUserData = () => {
  return async (dispatch: any) => {
    const fetchUser = async () => {
      const response = await fetch('https://fakestoreapi.com/users/1', { mode: 'cors' });

      if (!response.ok) {
        throw new Error('Could not fetch user data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const userData = await fetchUser();
      dispatch(userActions.setUser(userData));
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
export default fetchUserData;
