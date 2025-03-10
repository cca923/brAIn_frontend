import { DOMAIN } from "../constants/environment";

export const fetchApiRequest = async ({
  endpoint,
  method = "GET",
  data = null,
  headers = {},
}) => {
  try {
    const url = `${DOMAIN}${endpoint}`;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch API Error:", error);
    throw error;
  }
};

export const postApiJsonRequest = async ({ endpoint, data, headers = {} }) => {
  try {
    const url = `${DOMAIN}${endpoint}`;

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Post API Error:", error);
    throw error;
  }
};

export const createFormData = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(`${key}[]`, item));
    } else {
      formData.append(key, value);
    }
  });
  return formData;
};

export const postApiFormDataRequest = async ({
  endpoint,
  data,
  headers = {},
}) => {
  try {
    const url = `${DOMAIN}${endpoint}`;
    const formData = createFormData(data);
    const options = {
      method: "POST",
      body: formData,
      headers: {
        ...headers,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Post FormData Error:", error);
    throw error;
  }
};

export const deleteApiRequest = async ({ endpoint, headers = {} }) => {
  try {
    const url = `${DOMAIN}${endpoint}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Delete API Error:", error);
    throw error;
  }
};
