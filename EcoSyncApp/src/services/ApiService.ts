import axios from 'axios';

const API_BASE = 'http://YOUR_BACKEND_IP:3000/api';

export const trackActivity = async (activityData: any) => {
  return axios.post(`${API_BASE}/activities`, activityData);
};

export const getCarbonFootprint = async (userId: string) => {
  return axios.get(`${API_BASE}/footprint/${userId}`);
};
