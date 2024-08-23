function loadContent(section) {
    const content = document.getElementById('content')

    fetch(`assets/${section}`)
        .then(response => response.text())
        .then(html => content.innerHTML = html)

       

    
}
