import * as serviceContext from "./serviceContext";

export async function getToDoList() {
  try {
    const response = await serviceContext.get("/todos", null);
    const res = response.data;
    return res;
  } catch (error) {
    return error;
  }
}

export async function addTask(data) {
  try {
    const response = await serviceContext.post("/todos", data, null);
    const res = response.data;
    return res;
  } catch (error) {
    return error;
  }
}

export async function deleteTask(id) {
  try {
    const response = await serviceContext.del("/todos/" + id, null);
    const res = response.data;
    return res;
  } catch (error) {
    return error;
  }
}
