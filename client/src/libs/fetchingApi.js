export const loginUser = async (userData) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const user = await response.json();
    return user.data;
  }
};

export const registerUser = async (userData) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const registeredUser = await response.json();
    return registeredUser.data;
  }
};

export const getAllStudents = async () => {
  const url = `${import.meta.env.VITE_BASE_URL}/students/getAllStudents`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const addStudent = async (data, onSuccess) => {
  const url = `${import.meta.env.VITE_BASE_URL}/students/addStudent`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    onSuccess();
  }
};

export const updateStudent = async (data, onSuccess) => {
  const url = `${import.meta.env.VITE_BASE_URL}/students/updateStudent`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    onSuccess();
  }
};

export const deleteStudent = async (nim, onSuccess) => {
  const url = `${import.meta.env.VITE_BASE_URL}/students/deleteStudent/${nim}`;
  const response = await fetch(url, {
    method: "POST",
  });

  if (response.ok) {
    onSuccess();
  }
};
