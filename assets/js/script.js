libraryUrl = "https://www.loc.gov/?fo=json&at=trending_content"

fetch(libraryUrl)
    .then(response => response.json())
    .then(data => console.log(data));

