//variables

const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn= document.getElementById("searchBtn")

const newsquery= document.getElementById("newsquery");
const newstype= document.getElementById("newstype");
const newsdetails= document.getElementById("newsdetails")

//Arrays
var newsdataarr=[];
//api
const API_key="4249a3a5e1d9434f8d532e37caaa1e42";
const HEADLINES_NEWS="https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const General_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const SEARCH_NEWS="https://newsapi.org/v2/everything?q";



window.onload = (event) =>{
    newstype.innerHTML="<h4>Headlines</h4>"
    fetchHeadlines();
};
generalBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>Genral news</h4>"
    fetchGeneralnews();

});

businessBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>business news</h4>"
    fetchbusinessnews();
});

sportsBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>sports news</h4>"
    fetchsportsnews();
});

technologyBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>Technology news</h4>"
    fetchtechnologynews();
});

entertainmentBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>enetrtainment news</h4>"
    fetchentertainmentnews();
});

searchBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>search : "+newsquery.value+"</h4>"
    fetchquerynews();
});

const fetchHeadlines =  async() =>{
    const response = await fetch(HEADLINES_NEWS+API_key);
    newsdataarr=[];
    if(response.status >= 200 && response.status<300){
        const myjson= await response.json();
        console.log(myjson);
        newsdataarr=myjson.articles;

    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }

    displayNews();
};
const fetchGeneralnews= async() =>{
    const response = await fetch(General_NEWS+API_key);
    newsdataarr=[];
    if(response.status >= 200 && response.status<300){
        const myjson= await response.json();
        console.log(myjson);
        newsdataarr=myjson.articles;

    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }

    displayNews();
};

const fetchbusinessnews= async() =>{
    const response = await fetch(BUSINESS_NEWS+API_key);
    newsdataarr=[];
    if(response.status >= 200 && response.status<300){
        const myjson= await response.json();
        console.log(myjson);
        newsdataarr=myjson.articles;

    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }

    displayNews();
};

const fetchsportsnews= async() =>{
    const response = await fetch(SPORTS_NEWS+API_key);
    newsdataarr=[];
    if(response.status >= 200 && response.status<300){
        const myjson= await response.json();
        console.log(myjson);
        newsdataarr=myjson.articles;

    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }

    displayNews();
};

const fetchentertainmentnews= async() =>{
    const response = await fetch(ENTERTAINMENT_NEWS+API_key);
    newsdataarr=[];
    if(response.status >= 200 && response.status<300){
        const myjson= await response.json();
        console.log(myjson);
        newsdataarr=myjson.articles;

    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }

    displayNews();
};

const fetchtechnologynews= async() =>{
    const response = await fetch(TECHNOLOGY_NEWS+API_key);
    newsdataarr=[];
    if(response.status >= 200 && response.status<300){
        const myjson= await response.json();
        console.log(myjson);
        newsdataarr=myjson.articles;

    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }

    displayNews();
};

const fetchquerynews= async() =>{
    if(newsquery.value==NULL) return ;
    const response = await fetch(SEARCH_NEWS+newsquery.value+"&apiKey="+API_key);
    if(response.status >= 200 && response.status<300){
        const myjson= await response.json();
        console.log(myjson);
        newsdataarr=myjson.articles;

    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }

    displayNews();
};

function displayNews(){
    newsdetails.innerHTML="";
    if(newsdataarr.length == 0) {
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsdataarr.forEach(news=>{
        var date = news.publishedAt.split("T");


        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2";

        var card = document.createElement('div');
        card.className="p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","300");
        image.src = news.urlToImage;

        var cardbody = document.createElement('div');

        var newsheading = document.createElement('h5');
        newsheading.className ='card-title';
        newsheading.innerHTML = news.title;

        var dateheading = document.createElement('h6');
        dateheading.className = "text-primary";
        dateheading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link =  document.createElement('a');
        link.className = "btn btn-dark";
        link .setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML= "Read more"

        cardbody.appendChild(newsheading);
        cardbody.appendChild(dateheading);
        cardbody.appendChild(discription);
        cardbody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardbody);

        col.appendChild(card);

        newsdetails.appendChild(col);

    });

};

