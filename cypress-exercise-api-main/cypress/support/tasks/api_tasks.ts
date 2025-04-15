import axios from 'axios';

const apiRequest = async ({ method, url, data }: { method: string; url: string; data?: any }) => {
  try {
    const response = await axios({ method, url, data });
    return response.data;
  } catch (error: any) {
    throw new Error(`Erreur API: ${error?.response?.status} - ${error?.message}`);
  }
};

export const registerApiTasks = (on: Cypress.PluginEvents) => {
  on('task', {
    apiRequest,
  });
};
