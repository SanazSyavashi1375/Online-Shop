import { userActions } from './user';
export const fetchUserData = () => {
  return async (dispatch: any) => {
    const fetchUser = async () => {
      const response = await fetch('https://fakestoreapi.com/users', { mode: 'cors' });

      if (!response.ok) {
        throw new Error('Could not fetch user data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const userData = await fetchUser();
      dispatch(userActions.setUser(userData[0]));
    } catch (error) {
      console.log(error);
    }
  };
};
export default fetchUserData;
