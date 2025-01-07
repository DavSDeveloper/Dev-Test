// Función para verificar si un usuario está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Función para obtener el token JWT del almacenamiento local
export const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Función para manejar el cierre de sesión
export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/auth/login'; // Redirigir al login
};

// Función para mostrar un mensaje de error
export const showError = (message) => {
  alert(`Error: ${message}`);
};
