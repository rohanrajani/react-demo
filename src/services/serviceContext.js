import axios from "axios";

const BaseURL = "https://jsonplaceholder.typicode.com";
const headers = {
  "Content-Type": "application/json",
};

export function get(request, params, options) {
  let url = new URL(BaseURL + request);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url,
      headers: headers,
    })
      .then((response) => response)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function post(request, body, options) {
  let url = new URL(BaseURL + request);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url,
      headers: headers,
      data: body,
    })
      .then((response) => response)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function put(request, body, options) {
  let url = new URL(BaseURL + request);
  return new Promise((resolve, reject) => {
    axios({
      method: "put",
      url,
      headers: headers,
      data: body,
    })
      .then((response) => response)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function del(request, body, options) {
  let url = new URL(BaseURL + request);
  return new Promise((resolve, reject) => {
    axios({
      method: "delete",
      url,
      headers: headers,
      data: body,
    })
      .then((response) => response)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
