import api from "./apiClient";

const USERS_ENDPOINT = '/users';

export const signup = async (nameSurname, username, email, password, passwordConfirm) => {
  try {
    const response = await api.post(`${USERS_ENDPOINT}/CreateUser`, { nameSurname, username, email, password, passwordConfirm })
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
  }
};

export const getAllUsers = async(pageCount, itemCount) => {
  try {
    const response = await api.get(USERS_ENDPOINT, { params: { pageCount, itemCount }, requiresAuth: true })
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
  }
}

export const removeUser = async (id) => {
  try {
    const response = await api.delete(`${USERS_ENDPOINT}/${id}`, { requiresAuth: true, successMessage: 'Silme işlemi başarılı!' })
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
  }
}

export const updatePassword = async (userId, resetToken, newPassword, passwordConfirm) => {
  try {
    const response = await api.post(`${USERS_ENDPOINT}/update-password`, {userId, resetToken, newPassword, passwordConfirm})
    return response;
  } catch (error) {
    console.error('API isteği başarısız:', error);
  }
}

export const assignRoleToUser = async (userId, roles) => {
  try {
    const response = await api.post(`${USERS_ENDPOINT}/AssignRoleToUser`, {userId, roles}, { requiresAuth: true, successMessage: 'Rol atama işlemi başarılı!' })
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
  }
}

export const getRolesToUser = async (userIdOrName) => {
  try {
    const response = await api.get(`${USERS_ENDPOINT}/GetRolesToUser/${userIdOrName}`, { requiresAuth: true })
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
  }
}

export const getMenusOfUserRoles = async () => {
  try {
    const response = await api.get(`${USERS_ENDPOINT}/GetMenusOfUserRoles`, { requiresAuth: true })
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
  }
}

export const getUserProfile = async (id) => {
  try {
    const response = await api.get(`${USERS_ENDPOINT}/GetUser/${id}`, {requiresAuth: true, });
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Kullanıcı profilini güncelleme
export const updateUserProfile = async (userData) => {
  try {
    // Kullanıcı bilgilerini güncelleme API endpoint'i
    const response = await api.put(`${USERS_ENDPOINT}/UpdateUser `, userData, { requiresAuth: true, successMessage: 'Profil başarıyla güncellendi!' });
    return response.data;
  } catch (error) {
    console.error('API isteği başarısız:', error);
    throw error;
  }
};