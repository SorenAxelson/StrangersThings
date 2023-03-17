import { updateLoginToken } from "./Login";
import { registerToken } from "./Register";
// not currently functional
// purpose is to store token value for use in verification
const context = {
  token: "",
};
const getToken = () => {
  // if (updateLoginToken() != "") {
  //   context.token = updateLoginToken();
  //   console.log(context.token);
  // }
  // if (registerToken.token != "") {
  //   context.token = registerToken.token;
  //   console.log(context.token);
  // }
  // return context.token;
};
export default getToken;
