export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('userToken');
};

export const setToken = (token: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('userToken', token);
};

export const removeToken = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('userToken');
};