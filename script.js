fetch("data.json")
.then(response => response.json())
.then(data =>  {
for (const element of data) {

     let imgEl = document.createElement("img")
     
     console.log(imgEl.innerHTML)
     console.log(element["icon"])
     newBox.append(imgEl)
     


     element.innerHTML =  "<h2>" + data[0]["category"] + "</h2>" + "<h3>" + data["score"] + "</h3>"
    console.log(element)
    
    //  console.log(element["category"])
    }
   
})
    


    // reactionBox.innerHTML = "<h2>" + data[0]["category"] + "</h2>" + "<h3>" + data[0]["score"] + "</h3>"
    // memoryBox.innerHTML = "<h2>" + data[0]["category"] + "</h2>" + "<h3>" + data[0]["score"] + "</h3>"
    // console.log(data[0]["category"])



let newBox = document.querySelector(".box")


// const obj = JSON.parse()
// console.log(obj)
// text.textContent = "Hello I am Leon"

// data is the object
// 
// const array = ["a", "b", "c"];

// for (const element of array) {
//   console.log(element);
// }