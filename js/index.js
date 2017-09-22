function greeting(){
  let name = localStorage.getItem('name')
  if(name){
    document.getElementById('greeting').textContent = `Hello, ${name}`
  }
}
greeting()

var submit = document.getElementById('submit')
submit.addEventListener('click', function(event){
  event.preventDefault()
  var name = document.getElementById('name').value
  var success = `Welcome aboard, ${name}! Look for awesome emails coming to an inbox near you.`
  document.getElementById('success').textContent = success
  localStorage.setItem('name', name)
})
