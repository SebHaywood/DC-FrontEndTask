// GET TEXT INPUT
document.getElementById('main').style.opacity = "1";
document.getElementById('footer').style.opacity = "1"; 

const inputBox = document.getElementById('search-api');
var allLanguages;

// FETCH COUNTRY DATA FUNCTION
async function fetchCountry() {
  const countryName = inputBox.value.trim();
  const output = document.getElementById("output");
  output.style.opacity = "0";

  if (countryName !== '') {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await res.json();

      if (res.ok) {

        // PULL DATA POINTS
        const name = data[0].name.common;
        const capital = data[0].capital;
        const continents = data[0].continents;
        const currencies = data[0].currencies;
        const languages = data[0].languages;
        const population = data[0].population;
        const flag = data[0].flags;
        
        // HANDLE CURRECY OBJECT TO GET CURRENCY NAME
        var allCurrencies = Object.values(currencies);
        allCurrencies = Object.values(allCurrencies[0])[0];

        // HANDLE LANGUAGE OBJECT TO JOIN ALL LANGUAGES TOGETHER AS A STRING
        var allLanguages = Object.values(languages);
        allLanguages = allLanguages.join(", ");

        // HANDLE FLAG OBJECT TO GET FLAG PNG URL
        var flagURL = Object.values(flag)[0];
        
        // FORMAT THE POPULATION VALUE TO 2 DECIMAL PLACES AND APPEND MILLION
        var formatPopulation = (population / 1000000).toFixed(2) + " million";

        // GET ELEMENTS THAT HOLD DATA VALUES
        var titleElement = document.getElementById("display-countryName");
        var flagElement = document.getElementById("display-flag");

        var capitalElement = document.getElementById("display-capital");
        var continentsElement = document.getElementById("display-continents");
        var currenciesElement = document.getElementById("display-currencies");
        var languagesElement = document.getElementById("display-languages");
        var populationElement = document.getElementById("display-population");

        // REPLACE TEXT CONTENT WITH NEW DATA
        titleElement.textContent = name;
        flagElement.src = flagURL;

        capitalElement.lastElementChild.textContent = capital;
        continentsElement.lastElementChild.textContent = continents;
        currenciesElement.lastElementChild.textContent = allCurrencies;
        languagesElement.lastElementChild.textContent = allLanguages;
        populationElement.lastElementChild.textContent = formatPopulation;

        output.style.opacity = "1";


      } else {
      }
    } catch (error) {
    }
  } else {
    console.log('Please enter a country name');
  }
}

// Event listener for the search button
document.getElementById('search-api').addEventListener('click', fetchCountry);
document.getElementById('search-api-btn').addEventListener('click', fetchCountry);
document.getElementById('search-api').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fetchCountry();
  }
});