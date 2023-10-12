const siteElements = document.querySelectorAll('html, body, div, button');

for (const elem of siteElements) {
    elem.addEventListener("click", event => {
        console.log(`${elem.nodeName} (id=${elem.id}) clicked. target=${event.target.id || event.target.nodeName}, currentTarget=${event.currentTarget.id || event.currentTarget.nodeName}`);
    });
}