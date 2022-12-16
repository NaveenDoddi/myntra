
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

function toseeimg(input){
    
    var imgs = document.getElementsByTagName('img')
    var image = document.getElementById(input)
    var imagename = document.getElementById("imgBrand"+input).innerText
    var price = document.getElementById("price"+input).innerText
    document.getElementById("imgviewer").style.visibility="visible"
    var id = image.id
    var imgsrc = image.src
    for(let i=0; i<imgs.length; i++){
        if(imgs[i].id==id){
            var imgsrc=imgs[i].src
            document.getElementById("imagepic").src = imgsrc
            document.getElementById("imgBrand").innerText = imagename
            document.getElementById("price").innerText = price
        }
    }
    document.getElementById("mainTable").style.opacity = "0.5"
    document.getElementById("cartDiv").style.visibility = "hidden"
    document.getElementById("wishDiv").style.visibility = "hidden"
    
}

function closeimg(){

    document.getElementById("imgviewer").style.visibility = "hidden"
    document.getElementById("cartDiv").style.visibility = "hidden"
    document.getElementById("imgviewerwishbtns").style.visibility = "hidden"
    document.getElementById("imgviewercartbtns").style.visibility = "hidden"
    document.getElementById("wishDiv").style.visibility = "hidden"
    document.getElementById("mainTable").style.opacity = "10"
    document.getElementById("searchDiv").remove()

}
function addCart0(){
    document.getElementById("imgviewercartbtns").style.visibility = "visible"
}


function addCart(){
    document.getElementById("imgviewercartbtns").style.visibility = "hidden"
    document.getElementById("cartLogo").style.color = "red"

    document.getElementById("cartIsEmpty").style.visibility = "hidden"

    var row = document.createElement("tr")

    var source = document.getElementById("imagepic").src
    var image = document.createElement("img")
    image.src = source
    image.style.width="200px"
    image.style.height="300px"

    var col1 = document.createElement("td")
    col1.append(image)
    row.append(col1)
    
    var imgBrand = document.getElementById("imgBrand").innerText
    var imagename = document.createElement("p")
    imagename.innerText ="brand:"+ imgBrand
    
    var col2 = document.createElement("td")
    col2.append(imagename)
    
    var price = document.getElementById("price").innerHTML
    var pricetag = document.createElement("p")
    pricetag.innerText = price
    col2.append(pricetag)

    // var size = document.getElementById("L").innerHTML
    var size = "L"
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

    document.getElementById("cartTableBody").append(row)
    document.getElementById("totalMRP").innerHTML = totalMRP
    document.getElementById("discount").innerHTML = "-"+discount
    document.getElementById("totalAmount").innerHTML = totalAmount
    document.getElementById("imgviewer").style.visibility = "hidden"
    document.getElementById("wishDiv").style.visibility = "hidden"
    document.getElementById("mainTable").style.opacity = "10"


}
function openCart(){
    document.getElementById("mainTable").style.opacity = "0.1"
    document.getElementById("cartDiv").style.visibility = "visible"
}

var ordersCount = 0
function placeOrder(){
    ordersCount = ordersCount+1

    // document.getElementById("cartLogo").innerText = "C"+cartCount

    document.getElementById("cartTableBody").innerText = " "
    document.getElementById("totalMRP").innerText = "0"
    document.getElementById("discount").innerHTML = "0"
    document.getElementById("totalAmount").innerText = "0"

    document.getElementById("placingOrder").innerHTML =  "YOUR ORDER "+ordersCount+" HAS BEEN PLACED SUCCUSFULLY"
}


function addWish0(){
    document.getElementById("imgviewerwishbtns").style.visibility = "visible" 
}

function openWish(){
    document.getElementById("mainTable").style.opacity = "0.1"
    document.getElementById("wishDiv").style.visibility = "visible"
}

function wishlist(){
    document.getElementById("imgviewerwishbtns").style.visibility = "hidden"
    
    var row = document.createElement("tr")

    var source = document.getElementById("imagepic").src
    var image = document.createElement("img")
    image.src = source
    image.style.width="200px"
    image.style.height="300px"

    var col1 = document.createElement("td")
    col1.append(image)
    row.append(col1)
    
    var imgBrand = document.getElementById("imgBrand").innerText
    var imagename = document.createElement("p")
    imagename.innerText ="brand:"+ imgBrand
    
    var col2 = document.createElement("td")
    col2.append(imagename)
    
    var price = document.getElementById("price").innerHTML
    var pricetag = document.createElement("p")
   
    pricetag.innerText = price
    col2.append(pricetag)

    var size = "M"
    var sizetag=document.createElement("p")
    sizetag.innerText = "SIZE : "+size
    col2.append(sizetag)
    
    row.append(col2)

    var dummyrow = document.createElement("tr")
    var col4 = document.createElement("td")
    var col5 = document.createElement("td")
    col4.style.backgroundColor="rgb(218, 212, 149)"
    col5.style.backgroundColor="rgb(218, 212, 149)"
    dummyrow.append(col4)
    dummyrow.append(col5)

    document.getElementById("wishTableBody").append(row)
    document.getElementById("wishTableBody").append(dummyrow)
    document.getElementById("imgviewer").style.visibility = "hidden"
    document.getElementById("mainTable").style.opacity = "10"

  
}
function forresolution(){
    var bodywidth = document.getElementsByClassName("table-responsive")[0].offsetWidth
    // var bodyheight = document.getElementsByClassName("table-responsive")[0].offsetHeight
    
    if(bodywidth>350 && bodywidth<420){
        document.getElementById("para-invissible").style.height = "150px"
        document.getElementById("imgviewer").style.left = "40px"
        // document.getElementById("imgviewer").style.left = "80px"
        // document.getElementById("imgviewer").style.height = "150px"
        // document.getElementById("cartDIv").style.height = "150px"
        // document.getElementById("wishDiv").style.height = "150px"
        
    }
    if(bodywidth>420 && bodywidth<545){
        document.getElementById("para-invissible").style.height = "100px"
        document.getElementById("imgviewer").style.left = "90px"
    }
    if(bodywidth>545){
        document.getElementById("para-invissible").style.height = "50px"
    }

    document.getElementById("tr11").style.width=bodywidth+"px"
    document.getElementById("tr21").style.width=bodywidth+"px"
    document.getElementById("tr31").style.width=bodywidth+"px"
    document.getElementById("tr41").style.width=bodywidth+"px"
    document.getElementById("tr51").style.width=bodywidth+"px"

    document.getElementById("imgviewer").style.top = "130px"
    
    if(bodywidth >= 576){
        document.getElementById("imgviewer").style.left = "170px"
    }
    if(bodywidth >= 768){
        document.getElementById("imgviewer").style.left = "250px"
    }
    if(bodywidth >= 992){
        document.getElementById("imgviewer").style.left = "450px"
    }
    if(bodywidth >= 1200){
        document.getElementById("imgviewer").style.left = "600px"
    }
    if(bodywidth >= 1400){
        document.getElementById("imgviewer").style.left = "700px"
    }
    
    
}

function searching(){
   
    
    var input = document.getElementById("searchInput").value
    input = input.toUpperCase()

    var array = document.getElementsByTagName("small")
    for(i=0; i<array.length; i++){
        if(input == array[i].innerHTML.toUpperCase()){
            var table = document.createElement("table")
            table.id = "searchDiv"

            var searchId = array[i].id
            var id = searchId.slice(-3)
            var brandName = document.getElementById("imgBrand"+id).innerHTML
            var head = document.createElement("thead")
            var col1 = document.createElement("td")

            var col = document.createElement("td")
            var closebtn = document.createElement("button")
            closebtn.innerText = "X"
            closebtn.addEventListener("click",closeimg)
            col.append(closebtn)
            // var brand = document.createElement("h4")
            // brand.innerHTML = brandName
            col1.innerText = brandName
            head.append(col1)
            head.append(col)

            var searchImagesrc = document.getElementById(id).src
            var image  = document.createElement("img")
            var body = document.createElement("tbody")
            var col2 = document.createElement("td")
            col2.colSpan = "2"
            image.src = searchImagesrc
            image.style.width = "280px"
            image.style.height = "200px"
            col2.append(image)
            body.append(col2)

            var searchPrice = document.getElementById("price"+id).innerText
            // var price = document.createElement("span")
            var foot = document.createElement("tfoot")
            var col3 = document.createElement("td")
            col3.innerText = searchPrice
            foot.append(col3)

            var col4 = document.createElement("td")
            col4.innerHTML = input
            foot.append(col4)

            table.append(head,body,foot)

            document.getElementById("para-invissible1").style.visibility = "visible"
            document.getElementById("para-invissible1").append(table)
            document.getElementById("mainTable").style.opacity = "0.1"
            document.getElementById("searchDiv").style.opacity = "10"
            
        }
    }
    
}
