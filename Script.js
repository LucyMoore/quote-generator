$(document).ready(function(){
 var number = 0; 
var data = {
  "quotes": [{
    "quote": "Success is counted sweetest bu those who ne'er succeed",
    "name": "Emily Dickenson",
    "img": "img/ED.jpg"
      },
  {
    "quote": "Success consists of going from failure to failure without loss of enthusiasm.",
    "name": "Winston Churchill",
    "img": "img/WC.jpg"
  },
  {
    "quote": "two things are infinite, the universe, and human stupidity....and im not sure about the universe",
    "name": "Albert Einstein",
    "img": "img/AE.jpg"
  },

  {
    "quote": "Forever is composed of nows.",
    "name": "Emily Dickenson",
    "img": "img/ED.jpg"
  },

  {
    "quote": "Some people feel the rain, others just get wet",
    "name": "Bob Marley",
    "img": "img/BM.jpg"
  },

  {
    "quote": "Always bear in mind that your own resolution to succeed is more important than any other.",
    "name": "Abraham Lincoln",
    "img": "img/AL.jpg"
  },
  {
    "quote": "I don't do drugs. I am drugs.",
    "name": "Salvadore Dali",
    "img": "img/SD.jpg"
  },
  {
    "quote": "Crying does not indicate that you are weak, since birth it has always been a sign that you are alive",
    "name": "Jane Eyre/Charlotte BroCBe",
    "img": "img/CB.jpg"
  },
  {
    "quote": "Remember me with smiles and laughter, for that is how I will remember you all. If you can only remember me with tears, then don't remember me at all.",
    "name": "Laura Ingalls Wilder",
    "img": "img/LIW.jpg"
  }]
  
}
$("button").click(function(){
    getQuote();
  });

function random(){
   number = Math.floor(Math.random()*data.quotes.length)
  
  
  
}
 function display(){
    $("#quote").html(data.quotes[number].quote);
   $("#name").html("~ " + data.quotes[number].name);
   $("#imagedrop").attr("src", data.quotes[number].img)
   
 }

function getQuote(){
  random();
  display();
}

});

