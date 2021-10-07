
document.getElementById('Search').addEventListener('click',Searchphotos)
 function Searchphotos(){

        const client_id ="c17wSOIP8LhseWxqwiktoYbxr3ICCiJOpM-DtFDBuWA";   /*Api key */
        const query= document.getElementById("searchinput").value;
        const url = "https://api.unsplash.com/search/photos?client_id=" + client_id +"&query="+ query;

         fetch(url)            /*get data */
         .then(function(data){
             return data.json();
         })

         .then(function(data){
             console.log(data);
             $("#result").html('') /*refrsh */
             data.results.forEach(photo =>{   /*loop */
                 let result = `<img src ="${photo.urls.regular}" <a href="${photo.links.download}">`;
                 

             $("#result").append(result);
               /*show the result */
             })
         });

        }


   
           
