paintings = data.artObjects;

console.log("Amount of paintings: " + paintings.length)
for (var i = 0; i < paintings.length; i++) {
    //console.log(paintings[i]);
    makeElement(paintings[i],i)
    
    //gallery.appendChild(a)
    //gallery.appendChild(img)
}




function makeElement(data,id) {

    let a = document.createElement('a')
    let img = document.createElement('img')

    img.src = data.webImage.url
    img.alt = data.title;
    img.class = "artObject";
    a.href = "./pages/detail-page.html"
    a.href += `?id=${id}`;
    

    a.appendChild(img)

    gallery = document.getElementById("gallery")
    gallery.appendChild(a);

}