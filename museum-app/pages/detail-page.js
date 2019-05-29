function submitComment() {
    const inputField = document.getElementById('name')
    let name = inputField.value
    const textArea = document.getElementById('msg')
    let msg = textArea.value
    console.log("msg: " + msg)
    console.log("name: " + name)
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    if (name == "") {
        console.log("Name was empty")
        name = "Anonymous"
    }
    if (msg == "") {
        console.log("Msg was empty")
        msg = name + " Forgot to enter a message"
    }
    name = capitalize(name)
    
    h3.innerHTML = `${name} said:`;
    p.innerHTML = `${msg}`;
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    //console.log(comment)
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null

}
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }