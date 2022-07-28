import ApiService from "./fetchUtils"
const getRentalRequests = (setRentalRequests, token, id) =>{
    const fetcher = ApiService(token);
    const getUrl = `http://localhost:3000/rental_requests/${id}/show`;
    fetcher.get(getUrl).then((response) => setRentalRequests(response.data))
    .catch((error) => {console.log(error);})

}
export {getRentalRequests}