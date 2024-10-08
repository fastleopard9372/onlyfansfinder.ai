import * as API from "../../api";
import { addAuthUser, authUserLoading } from "@/redux/features/authSlice";

export function getUserProfile() {
  return async function (dispatch) {
    try {
      dispatch(authUserLoading({ loading: true }));
      const response = await API.getUserProfile();
      const user = response.data?.user;

      // Add authenticated user to redux store
      dispatch(addAuthUser({ user }));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(authUserLoading({ loading: false }));
    }
  };
}
