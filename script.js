function run111(){
    var input = document.getElementById("111").id
    toseeimg(input)
}
function run112(){
    var input = document.getElementById("112").id
    toseeimg(input)
}
function run113(){
    var input = document.getElementById("113").id
    toseeimg(input)
}
function run114(){
    var input = document.getElementById("114").id
    toseeimg(input)
}
function run115(){
    var input = document.getElementById("115").id
    toseeimg(input)
}
function run116(){
    var input = document.getElementById("116").id
    toseeimg(input)
}
function run117(){
    var input = document.getElementById("117").id
    toseeimg(input)
}
function toseeimg(input){
    var imgs=document.getElementsByTagName('img')
    var image=document.getElementById(input)
    var imagename=document.getElementById("imgname"+input).innerText
    document.getElementById("imgviewer").style.visibility="visible"
    var id = image.id
    var imgsrc = image.src
    for(let i=0; i<imgs.length; i++){
        if(imgs[i].id==id){
            var imgsrc=imgs[i].src
            document.getElementById("imageviewer").src=imgsrc
            document.getElementById("imgname").innerText=imagename
        }
    }
}
// function toseeimg(){
//     document.getElementById("dummy").style.visibility="visible"
// }


function closeimg(){
    document.getElementById("imgviewer").style.visibility="hidden"
}
