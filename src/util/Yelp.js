const APIKey = 'DAfptbCI5l8NgmI75oXkD8NabHV8sZ21FAAf2vsm8J6gDnY9jM6WDw_SMezBI8t2gA_r2R-fgB4i0g9VufZjKOfpZG6x6Qib0psIU6lF-E0sTNc4oYXlaYUFKYopWnYx';

const Yelp = {

  search(term, location, sortBy){
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=best_match`;

      fetch(url, {
        method: 'GET',
        headers: {'Authorization': 'Bearer '+APIKey}
      }).then(response=>{
        if(response.ok){
             return response.json();
           }
           throw new Error('Request failed!');
         }, networkError=>console.log(networkError.message)).then(jsonResponse => {
                            var x = jsonResponse.businesses.map(item=>{
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
                                  });console.log(x);
         });
}
}
export default Yelp;
