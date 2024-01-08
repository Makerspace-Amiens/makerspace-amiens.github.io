window.onload = () => {
  
    // Tabs Start
    document.querySelectorAll('.tabs').forEach((tab)=>{
      tab.querySelectorAll('li').forEach((li)=>{
        li.onclick = () => {
            tab.querySelector('li.is-active').classList.remove('is-active')
            li.classList.add('is-active')
            tab.nextElementSibling.querySelector('.tab-pane.is-active').classList.remove('is-active')
            tab.nextElementSibling.querySelector('.tab-pane#'+li.firstElementChild.getAttribute('id'))
              .classList.add("is-active")
        }
      })
    })
    
}