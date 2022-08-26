import http from "./http";
export function getMarkDown(id: string) {
  return http.get("/markdown/" + id + ".md");
}
