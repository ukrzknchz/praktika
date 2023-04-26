fetch("https://restcountries.com/v3.1/region/europe")
               .then(resolve => resolve.json())
               .then(data => {
                   data.forEach(country => {
                       console.log(country.capital[0]);
                   });
               })