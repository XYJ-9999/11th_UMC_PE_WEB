import ky from "ky";
import { env } from "../config/env";

export const apiClient = ky.create({
  prefixUrl: env.apiBaseUrl,
});
