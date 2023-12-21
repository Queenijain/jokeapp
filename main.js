let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");


const fetchQuote = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    const jokes = data.value;
      h1.innerText = jokes;
      p.innerText = "Chuck-Norris";
      
}

button.addEventListener("click", fetchQuote)