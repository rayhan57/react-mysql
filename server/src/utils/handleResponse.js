const handleResponse = (res, success, message, data) => {
  res.json({ success, message, data });
};

export default handleResponse;
