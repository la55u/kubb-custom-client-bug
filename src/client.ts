import Axios from "axios";
import type { AxiosError } from "axios";

export const AXIOS_INSTANCE = Axios.create({});

export interface RequestConfig<TVariables = unknown> {
  method: "get" | "put" | "patch" | "post" | "delete";
  url: string;
  params?: unknown;
  data?: TVariables;
  responseType?:
    | "arraybuffer"
    | "blob"
    | "document"
    | "json"
    | "text"
    | "stream";
  signal?: AbortSignal;
}

export const axiosClient = async <
  TData,
  TError = unknown,
  TVariables = unknown
>(
  config: RequestConfig<TVariables>
): Promise<TData> => {
  const promise = AXIOS_INSTANCE.request<TData>({
    ...config,
    paramsSerializer: { indexes: null },
  }).then(({ data }) => data);
  // .catch((e: AxiosError<TError>) => {
  //   throw e;
  // });

  //@ts-ignore
  return promise;
};

export default axiosClient;
