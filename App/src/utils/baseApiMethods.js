import Axios from 'axios';

const apiClient = Axios.create({
  baseURL: 'https://data-programming-395017.uc.r.appspot.com/',
});

export const getRequest = async (getRoute, config=null) => {
  return apiClient
    .get(getRoute, config ? config : null)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};
