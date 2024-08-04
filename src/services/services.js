import { ENVIRONMENT } from "../config/config";

export const getData = async (uri) => {
  try {
    const res = await fetch(`${ENVIRONMENT}${uri}`, {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export const getOneData = async (uri, id) => {
  try {
    const res = await fetch(`${ENVIRONMENT}${uri}${id}`, {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export const postData = async (uri, body) => {
  try {
    const res = await fetch(`${ENVIRONMENT}${uri}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export const putData = async (uri, id, body) => {
  try {
    const res = await fetch(`${ENVIRONMENT}${uri}${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export const deleteData = async (uri, id) => {
  try {
    const res = await fetch(`${ENVIRONMENT}${uri}${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
