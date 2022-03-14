import useSWR from "swr";
import axios from "axios";
const useCustomSWR = (...args) => {
  const custom_url = args[0];
  const params = args[1] ? args[1] : "";
  const headers = args[2] ? args[2] : "";
  const fetcher = (url, secondParams) =>
    axios
      .get(url, {
        params: secondParams.params,
        headers: secondParams.headers,
      })
      .then((res) => res.data);

  const { data, error } = useSWR([custom_url, { params, headers }], fetcher);
  return {
    data,
    error,
  };
};

export default useCustomSWR;
