
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
function run118(){
    var input = document.getElementById("118").id
    toseeimg(input)
}
function run119(){
    var input = document.getElementById("119").id
    toseeimg(input)
}
function run120(){
    var input = document.getElementById("120").id
    toseeimg(input)
}
function run211(){
    var input = document.getElementById("211").id
    toseeimg(input)
}
function run212(){
    var input = document.getElementById("212").id
    toseeimg(input)
}
function run213(){
    var input = document.getElementById("213").id
    toseeimg(input)
}
function run214(){
    var input = document.getElementById("214").id
    toseeimg(input)
}
function run215(){
    var input = document.getElementById("215").id
    toseeimg(input)
}
function run216(){
    var input = document.getElementById("216").id
    toseeimg(input)
}
function run217(){
    var input = document.getElementById("217").id
    toseeimg(input)
}
function run218(){
    var input = document.getElementById("218").id
    toseeimg(input)
}

var dummyid = 0
function toseeimg(input){
    
    dummyid = input
    var imgs = document.getElementsByTagName('img')
    var image = document.getElementById(input)
    var imagename = document.getElementById("imgname"+input).innerText
    var price = document.getElementById("price"+input).innerText
    document.getElementById("imgviewer").style.visibility="visible"
    var id = image.id
    var imgsrc = image.src
    for(let i=0; i<imgs.length; i++){
        if(imgs[i].id==id){
            var imgsrc=imgs[i].src
            document.getElementById("imagepic").src = imgsrc
            document.getElementById("imgname").innerText = imagename
            document.getElementById("price").innerText = price
        }
    }
    document.getElementById("mainTable").style.opacity = "0.5"
    document.getElementById("cartDiv").style.visibility = "hidden"
    input = "nice"
    
}

function closeimg(){
    input = dummyid
    document.getElementById("imgviewer").style.visibility = "hidden"
    document.getElementById("cartDiv").style.visibility = "hidden"
    document.getElementById("mainTable").style.opacity = "10"
}
function addCart0(){
    var para = document.createElement("p")
    para.innerText = "select your SIZE :"
    para.class = "btn-group"
    para.id = "cartbtns"

    var sbutton = document.createElement("button")
    sbutton.innerText = "S"
    sbutton.id = "S"
    sbutton.addEventListener("click",addCart)

    var mbutton = document.createElement("button")
    mbutton.innerText = "M"
    mbutton.id = "M"
    mbutton.addEventListener("click",addCart)

    var lbutton = document.createElement("button")
    lbutton.innerText = "L"
    lbutton.id = "L"
    lbutton.addEventListener("click",addCart)

    var xlbutton = document.createElement("button")
    xlbutton.innerText = "XL"
    xlbutton.id = "XL"
    xlbutton.addEventListener("click",addCart)

    para.append(sbutton)
    para.append(mbutton)
    para.append(lbutton)
    para.append(xlbutton)
    document.getElementById("imgviewerbtns").append(para)
}


var cartCount = 0

function addCart(){

    cartCount = cartCount+1
    document.getElementById("cartLogo").innerText = "C"+cartCount
    document.getElementById("cartLogo").style.color = "red"

    document.getElementById("cartIsEmpty").style.display="none"

    var row = document.createElement("tr")

    var source = document.getElementById("imagepic").src
    var image = document.createElement("img")
    image.src = source
    image.style.width="300px"

    var col1 = document.createElement("td")
    col1.append(image)
    row.append(col1)
    
    var imgname = document.getElementById("imgname").innerText
    var imagename = document.createElement("p")
    imagename.innerText ="brand:"+ imgname
    
    var col2 = document.createElement("td")
    col2.append(imagename)
    
    var price = document.getElementById("price").innerHTML
    var pricetag = document.createElement("p")
    // price = parseInt(price)
    console.log(typeof(price))
    console.log(price)
    pricetag.innerText = price
    col2.append(pricetag)

    var size = document.getElementById("L").innerHTML
    var sizetag=document.createElement("p")
    sizetag.innerText = "SIZE : "+size
    col2.append(sizetag)
    
    row.append(col2)
    
    var totalMRP = document.getElementById("totalMRP").innerHTML
    price = parseInt(price)
    totalMRP = parseInt(totalMRP)
    totalMRP = totalMRP + price

    var discount = totalMRP/100*10

    var totalAmount = totalMRP - discount

    var dummyrow = document.createElement("tr")
    var col4 = document.createElement("td")
    var col5 = document.createElement("td")
    col4.style.backgroundColor="rgb(218, 212, 149)"
    col5.style.backgroundColor="rgb(218, 212, 149)"
    dummyrow.append(col4)
    dummyrow.append(col5)

    document.getElementById("cartTableBody").append(row)
    document.getElementById("cartTableBody").append(dummyrow)
    document.getElementById("totalMRP").innerHTML = totalMRP
    document.getElementById("discount").innerHTML = "-"+discount
    document.getElementById("totalAmount").innerHTML = totalAmount
    document.getElementById("imgviewer").style.visibility = "hidden"
    document.getElementById("mainTable").style.opacity = "10"
    document.getElementById("cartbtns").remove() 


}
function openCart(){
    document.getElementById("mainTable").style.opacity = "0.1"
    document.getElementById("cartDiv").style.visibility = "visible"
}

function delCart(){
    document.getElementById("cartTableBody").innerText = " "
    // document.getElementById("cartTableFoot").innerText = " "
}

var wishCount = 0

function wishlist(){
   
    var color = document.getElementById("wishlistbtn").style.backgroundColor
    
    if(color == "rgb(143, 173, 199)"){
        wishCount = wishCount+1
        document.getElementById("wishlistbtn").style.backgroundColor="rgb(198, 41, 41)"
    }
    if(color == "rgb(198, 41, 41)"){
        wishCount = wishCount-1
        document.getElementById("wishlistbtn").style.backgroundColor="rgb(143, 173, 199)"
    } 
    document.getElementById("wishLogo").innerText = "W"+wishCount
  
}


    
