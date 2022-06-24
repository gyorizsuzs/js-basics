let x ="egy valtozo vagyok";

console.log(x);

x = "megvaltoztam";

console.log(x);

const obj = {
    key : "ertek",
    key2 : 123,
    boolivan : true,
    key3 : "5",
    array: ['lara croft', 'indiana jones'],
    masikarray: {
        key1: "string",
        key4: 961,
        key6: ['luke', 'vegtelen']
    }
}

const arr = [
    'srting',
    456,
    false,
    "789"
]

arr[1] = 987
arr[19] = "sdfghjk"

function countryComponent(country) {
    return `
        <div class="country">
            ${country.name.common}
        </div>
    `
}

async function loadEvent() {

    let rootElement = document.getElementById('root');

//    rootElement.insertAdjacentHTML('beforeend' , `
//        <h1>${arr.length}</h1>
//    `);
//
 //   for (let index = 5; index <= 10; index++) {
 //       console.log('the current value of index is: ', index);
 //       rootElement.insertAdjacentHTML('beforeend' , `
 //           <h1>${index}</h1>
 //       `);
 //   }

    const countries = await fetch('https://restcountries.com/v3.1/all');
    console.log(countries);
    const countriesJson = await countries.json();
    console.log(countriesJson);

    for (let index = 0; index < 10; index++) {
//        console.log(countriesJson[index].name.common);
        rootElement.insertAdjacentHTML('beforeend' , countryComponent(countriesJson[index]));
    }
}

// trying 





window.addEventListener('load' , loadEvent);