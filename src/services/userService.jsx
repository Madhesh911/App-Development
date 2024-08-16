// src/services/userService.js
export const fetchUser = async (id) => {
  const response = await fetch(`http://localhost:5000/users/${id}`);
  const data = await response.json();
  return data;
};

export const updateUser = async (id, formData) => {
  const response = await fetch(`http://localhost:5000/users/${id}`, {
    method: "PATCH",
    body: formData,
  });
  const data = await response.json();
  return data;
};
