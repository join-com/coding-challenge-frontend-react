import axios from 'axios';

export const createInstance = baseURL => axios.create({ baseURL });

export const request = async ({ instance, config, params}) => {
  try {
    const { data } = await instance({ ...config, params });
    return data;
  } catch (error) {
    throw error;
  }
}