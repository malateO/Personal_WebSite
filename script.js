function closeMenu (){
    const menuItems = document.querySelectorAll('.menu li a');
    const checkBox = document.getElementById('check')

    menuItems.forEach(items => {
        items.addEventListener('click', () => {
            checkBox.checked = false
        })
    })
}

closeMenu()