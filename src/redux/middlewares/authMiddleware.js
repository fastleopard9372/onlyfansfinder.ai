import { authUserLogout, addAuthToken } from "@/redux/features/authSlice";
import { authStorage } from "@/utils/browserStorage";

const authMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === authUserLogout().type) {
    authStorage.logout();
  } else if (action.type === addAuthToken().type) {
    authStorage.authTkn = action.payload?.token;
  }
  return next(action);
};

export default authMiddleware;
