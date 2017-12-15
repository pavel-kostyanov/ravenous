const APIKey = 'f-4dGvYKVJp2_ufqGPLIM34uyIHvFE5KtV1Rk6NrFWamhm26arqJI58tXymO6IEjHOzVWu438kijI8j-Sg0SsSM0zo1cCvIpjN827pX5pyS47RUXQmzG-xYN2jMyWnYx';

const Yelp = {

  search(term, location, sortBy){
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
console.log(url);
    return fetch(url, {
        method: 'GET',
        headers: {'Authorization': 'Bearer '+APIKey}
      }).then(response=>{
        if(response.ok){
             return response.json();
           }
           throw new Error('Request failed!');
         }, networkError=>console.log(networkError.message)).then(jsonResponse => {
                          return  jsonResponse.businesses.map(item=>{
                                             return {
                                               id: item.id,
                                                    imageSrc: item.image_url,
                                                    name: item.name,
                                                    address: item.location.address1,
                                                    city: item.location.city,
                                                    state: item.location.state,
                                                    zipCode: item.location.zip_code,
                                                    category: item.categories.title,
                                                    rating: item.rating,
                                                    reviewCount: item.review_count
                                             };
                                  });
         });
}
}
export default Yelp;
