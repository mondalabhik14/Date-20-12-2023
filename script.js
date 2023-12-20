 async function abcd(){
    var userdata = await fetch("https://randomuser.me/api/");
    var data = await userdata.json();
    console.log(data.results[0].name);
    var largeImage = data.results[0].picture.large;
    var mediumImage = data.results[0].picture.medium;
    var thumnilImage = data.results[0].picture.large;

   var img1 = document.querySelector("#a");
   var img2 = document.querySelector("#b");
   var img3 = document.querySelector("#c");
   var name = document.querySelectorAll("label");
   name.forEach((name)=>{
    name.innerText = `${data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last }`
   })

   img1.src = largeImage;
   img2.src = mediumImage; 
   img3.src = thumnilImage;
}
abcd();