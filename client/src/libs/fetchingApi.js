export const getAllStudents = async () => {
  const url = `${import.meta.env.VITE_BASE_URL}/getAllStudents`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const addStudent = async (data, onSuccess) => {
  const url = `${import.meta.env.VITE_BASE_URL}/addStudent`;
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
  const url = `${import.meta.env.VITE_BASE_URL}/updateStudent`;
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
  const url = `${import.meta.env.VITE_BASE_URL}/deleteStudent/${nim}`;
  const response = await fetch(url, {
    method: "POST",
  });

  if (response.ok) {
    onSuccess();
  }
};
