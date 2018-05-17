const arr = [];

const form = document.querySelector('#userForm')

let imgMaui = document.createElement("img");
imgMaui.src = "http://www.typesofdolphins.com/wp-content/uploads/2017/07/Maui-Dolphin-Facts.jpg";

let imgHec = document.createElement("img");
imgHec.src = "http://www.earthtimes.org/newsimage/dolphin-deadly-race-survive_23113.jpg";

let imgInd = document.createElement("img");
imgInd.src = "http://d2ouvy59p0dg6k.cloudfront.net/img/ganges_river_dolphin_114116_234482_363911.jpg";

let imgVaq = document.createElement("img");
imgVaq.src = "https://i.ytimg.com/vi/v2-F0BsS6oQ/hqdefault.jpg";

let imgBai = document.createElement("img");
imgBai.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eKqqrjA9CMBVMt13xGKt1zkw6KObWMPnqUA-z1ZfE1iaXKrH";

const reset = document.createElement('button')
reset.textContent = "Reset"
form.appendChild(reset)

const handleSubmit = function (ev) {
    ev.preventDefault()
    const form = ev.target

    const user = {
        '':form.userInput.value,
    }
  
    const users = document.querySelector('#users')
    const list = renderList(user)
    users.appendChild(list)
  
    form.reset() 
    form.userInput.focus() 
  }

const handleReset = function(ev) {
    ev.preventDefault()
    const div = document.querySelector('div')
    div.remove();
    let body = document.getElementById('bodyHTML')
    body.style.backgroundColor = "#20b2aa"
    body.style.backgroundImage = "none"
    // body.style.backgroundColor = "black"
}

reset.addEventListener('click', handleReset)


function renderListItem(label, value) {
      const item = document.createElement('li')
      item.textContent = `${label}`
      try {
           item.appendChild(value)
       
      } catch(e) {
           item.textContent += value
      }
      return item
}

const handleDelete = function(ev) {
    ev.preventDefault()
    const listItem = ev.target
    listItem.parentNode.remove()
    arr.splice(arr.indexOf(listItem), 1)

}

let temp = ""

const handleImages = function() {
    let body = document.getElementById('bodyHTML')
    // body.style.height = "100%"
    // body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundPosition = "center"
    // body.style.backgroundSize = "cover"

    if(temp === "Maui's Dolphin") {
        body.style.backgroundImage = `url(${imgMaui.src})`;
    }
    if(temp === "Hector's Dolphin") {
        body.style.backgroundImage = `url(${imgHec.src})`;
    } 
    if (temp === "Indus and Ganges River Dolphin") {
        body.style.backgroundImage = `url(${imgInd.src})`;
    }
    if(temp === "Vaquita") {
        body.style.backgroundImage = `url(${imgVaq.src})`;
    }
    if(temp === "Baiji") {
        body.style.backgroundImage = `url(${imgBai.src})`;
    }
}

const handleBackground = function() {
    let body = document.getElementById('bodyHTML')
    body.style.backgroundColor = "#20b2aa"
    body.style.backgroundImage = "none"

}

function renderList(data) {
      const list = document.createElement('ul')
      const del = document.createElement('button')
      del.addEventListener('click', handleDelete)
      del.textContent = "Delete"
      
      Object.keys(data).forEach(label =>{
          const item = renderListItem(label, data[label])
          list.appendChild(item)
          arr.push(item)
        //   list.appendChild(del)

          const image = document.createElement('button')
          image.textContent = "Change Background"
          image.addEventListener('click', handleImages)

          const revert = document.createElement('button')
          revert.textContent = "Revert Background"
          revert.addEventListener('click', handleBackground)

        if(form.userInput.value === "Maui's Dolphin") {
            temp = "Maui's Dolphin"

            list.innerHTML += "<br\>You listed one of the <b\>top 5 most endangered</b\> dolphin species."
            list.innerHTML += " Maui’s dolphin lives off the coast of New Zealand, and with just 55 animals alive today, is the most endangered dolphin species."
            list.innerHTML += " Click <a href=\"http://justingregg.com/top-5-most-endangered-dolphin-species-and-how-you-can-help/\">here</a> to find out more."
        
            list.appendChild(imgMaui)
            list.appendChild(image)
            list.appendChild(revert)
        }
        if(form.userInput.value === "Hector's Dolphin") {
            temp = "Hector's Dolphin"

            list.innerHTML += "<br\>You listed one of the <b\>top 5 most endangered</b\> dolphin species."
            list.innerHTML += " Hector’s dolphins inhabit a small range off the coast of New Zealand."
            list.innerHTML += " Click <a href=\"http://justingregg.com/top-5-most-endangered-dolphin-species-and-how-you-can-help/\">here</a> to find out more."
       
            list.appendChild(imgHec)
            list.appendChild(image)
            list.appendChild(revert)
        } 
        if (form.userInput.value === "Indus and Ganges River Dolphin") {
            temp = "Indus and Ganges River Dolphin"

            list.innerHTML += "<br\>You listed one of the <b\>top 5 most endangered</b\> dolphin species."
            list.innerHTML += " The Indus and Ganges River dolphins are listed as Endangered by the IUCN."
            list.innerHTML += " Click <a href=\"http://justingregg.com/top-5-most-endangered-dolphin-species-and-how-you-can-help/\">here</a> to find out more."
        
            list.appendChild(imgInd)
            list.appendChild(image)
            list.appendChild(revert)
        }
        if(form.userInput.value === "Vaquita") {
            temp = "Vaquita" 

            list.innerHTML += "<br\>You listed one of the <b\>top 5 most endangered</b\> dolphin species."
            list.innerHTML += " The vaquita is a porpoise species is considered the world’s most-endangered cetacean"
            list.innerHTML += " Click <a href=\"http://justingregg.com/top-5-most-endangered-dolphin-species-and-how-you-can-help/\">here</a> to find out more."
       
            list.appendChild(imgVaq)
            list.appendChild(image)
            list.appendChild(revert)
        }
        if(form.userInput.value === "Baiji") {
            temp = "Baiji"

            list.innerHTML += "<br\>You listed one of the <b\>top 5 most endangered</b\> dolphin species."
            list.innerHTML += " The Baiji or Yangtze River dolphin is listed by the IUCN as Critically Endangered, but is considered by most scientists to be functionally extinct."
            list.innerHTML += " Click <a href=\"http://justingregg.com/top-5-most-endangered-dolphin-species-and-how-you-can-help/\">here</a> to find out more."
    
            list.appendChild(imgBai)
            list.appendChild(image)
            list.appendChild(revert)
        }

         list.appendChild(del)
        })
      return list
}
 
form.addEventListener('submit', handleSubmit)  