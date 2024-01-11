export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user-data"));

  if (user) return user.token;

  return "";
};
