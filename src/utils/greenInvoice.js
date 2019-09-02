import axios from "axios";
// api keys
import config from "../config/apis";
const { GI_API, GI_Secret, sandbox_url } = config;

export const getToken = async () => {
  try {
    const res = await axios.post(
      `https://sandbox.d.greeninvoice.co.il/api/v1/account/token`,
      {
        id: GI_API,
        secret: GI_Secret
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
