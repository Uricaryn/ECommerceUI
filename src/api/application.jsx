import axios from 'axios';
import { showInfoToast, showErrorToast } from '../utils/toastUtils';
import AuthService from '../services/AuthService';

const API_URL = 'https://ecommerce-d8dqbhh8hvhwfxg9.westeurope-01.azurewebsites.net/api';

export const getAuthorizeDefinitonEnpoints = async () => {
  const token = await AuthService.getAccessToken();
  if(token){
    try {
      const response = await axios.get(`${API_URL}/ApplicationServices`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if(response.status == 200) return response.data;
      else showErrorToast("Failed to fetch authorize definition endpoints. Please try again.");

    } catch (error) {
      showErrorToast("An error occurred. Please try again. (getAuthorizeDefinitonEnpoints)");
    }
  } else showInfoToast("(Unauthorization) Please log in!"); 
};
  