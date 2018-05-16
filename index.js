const form = document.querySelector('#userForm')

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

 const handleDelete = function(ev) {
     ev.preventDefault()
//     const form = ev.target
//     listItem.remove()
    const listItem = document.querySelector('div');
    listItem.remove()
 }

const handleReset = function(ev) {
    ev.preventDefault()
    const div = document.querySelector('div')
    div.remove();
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
  
function renderList(data) {
      const list = document.createElement('ul')
      const button = document.createElement('button')
      button.addEventListener('click', handleDelete)
    
      button.textContent = "Delete"
      
      Object.keys(data).forEach(label =>{
          const item = renderListItem(label, data[label])
          list.appendChild(item)
          list.appendChild(button)
        })
      return list
}
 
form.addEventListener('submit', handleSubmit)  