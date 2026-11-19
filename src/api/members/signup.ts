import { apiClient } from "../api-client";

export interface SignupRequest {
  email: string;
  nickname: string;
  password: string;
}

export interface SignupResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    memberId: number;
    email: string;
    nickname: string;
    createdAt: string;
  };
}

export function signup(body: SignupRequest) {
  return apiClient
    .post("members/signup", { json: body })
    .json<SignupResponse>();
}
