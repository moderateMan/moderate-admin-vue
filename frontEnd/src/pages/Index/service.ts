import { http } from "@/common/http";

interface loginParamsT {
  name: string;
  password: string;
}

export function login(params: loginParamsT) {
  return http.request({
    url: "/login",
    method: "POST",
    data: params,
  });
}

//θ·εΎζι
export function getPermissions() {
  return http.request({
    url: "/users/getPermissions",
    method: "GET",
  });
}


