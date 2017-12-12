const APIKey = 'DAfptbCI5l8NgmI75oXkD8NabHV8sZ21FAAf2vsm8J6gDnY9jM6WDw_SMezBI8t2gA_r2R-fgB4i0g9VufZjKOfpZG6x6Qib0psIU6lF-E0sTNc4oYXlaYUFKYopWnYx';

const Yelp = {

  search(term, location, sortBy){
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search/?term=${term}&location=${location}&sortBy=best_match`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.response.bussineses){
          xhr.response.businesses.map(item => {
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
        };
      }
    };
    xhr.open('GET', url);
  	xhr.setRequestHeader('Authorization', 'Bearer '+APIKey);
  	xhr.send();
  }
}
export default Yelp;
