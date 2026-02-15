let url = "https://catfact.ninja/fact"

fetch(url)
.then((response) => {
    console.log(response.json());
})
.catch((error) => {
    console.log(error)
});