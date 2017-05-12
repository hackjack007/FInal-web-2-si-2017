$(document).ready(function(){
  var qouteLibrary=[
    {
      qoute:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    name:"Ralph Waldo Emerson"
      
    },
    {
      qoute:"Some are born great, some achieve greatness, and some have greatness thrust upon them.",
      name:"William Shakespeare"
      
    },
    {
     qoute:"All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
      name:"Winston Churchill"
    },
    {
      qoute:"Great achievement is usually born of great sacrifice, and is never the result of selfishness.",
      name:"Napoleon Hill"
      
    },
    {
      qoute:"Only those who dare to fail greatly can ever achieve greatly",
      name:"Robert Kennedy"
      
    },
    {
      qoute:"One of the greatest diseases is to be nobody to anybody.",
      name:"Mother Teresa"
      
    },
    {
      qoute:"The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile.",
      name:"plato"
    },
    {
     qoute:"It is a rough road that leads to the heights of greatness.",
      name: "Lucius Annaeus Seneca"
    },
    {
      qoute:"Good artists copy, great artists steal.",
      name:"Pablo Picasso"
    },
    {
     qoute:"You can't cross the sea merely by standing and staring at the water.",
      name:"Rabindranath Tagore"
    },
    {
     qoute:"Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
      name:"Bradley Whitford"
    },
    {
    qoute:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      name:"Ayn Rand"
    },
    {
      qoute:"Don't watch the clock; do what it does. Keep going.",
      name:"Sam Levenson"
      
    },
    {
      qoute:"It always seems impossible until its done.",
      name:"Nelson Mandela"
    },
    {
      qoute:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      name:"Samuel Beckett"
    },
    {
    qoute:"Perseverance is failing 19 times and succeeding the 20th.",
      name:"Julie Andrews"
    },
    {
    qoute:"Lord, grant that I might not so much seek to be loved as to love.",
      name:"Francis of Assisi"
    },
    {
    qoute:"I have decided to stick with love. Hate is too great a burden to bear.",
      name:"Martin Luther King, Jr."
    }
  ];
  var qouteGenerator = $("#getQoute");
  qouteGenerator.on("click",function(){
  var qouteLibraryLength = qouteLibrary.length;
    
  var randomNumber = Math.floor(Math.random() * qouteLibraryLength);
    var returnedQoute = qouteLibrary[randomNumber].qoute;
  var returnedName = qouteLibrary[randomNumber].name;
   var returned = "<div class='text-center'>"+ returnedQoute + "<br><hr size = 3>" + "<span class='font'>" + returnedName + "</span>" + "</div><br>";
  
    $(".qouteposition").html(returned);
   $("#tweetqoute").on("click",function(){
      var tweet= 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + returnedQoute + '" ' + returnedName);   
     window.open(tweet,'_blank');
   });
    
    
  });
  
  
});