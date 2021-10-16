let request = new XMLHttpRequest();
//request.open('get','http://api.weatherstack.com/current?access_key=44d9191b5e84de47914f9507241c2da3&query=New%20York');
request.open('get','https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe');




request.onload = function()
{
    console.log(this.response);
    let data = JSON.parse(this.response);
    console.log(data);

    let clima = document.getElementById('clima');
    clima.innerHTML=`
        <h2> el clima de: ${data.description} </h2>
        
    `
};






request.send();