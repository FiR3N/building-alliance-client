export const getAccessToken = (): string => {
  const token = localStorage.getItem("token");
  return `Bearer ${token}`;
};
