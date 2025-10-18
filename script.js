const STATIONS = [
    // Switzerland
    "Zermatt Bus Terminal",
    "Interlaken Ost Bus Station",
    "Grindelwald Bus Terminal",
    "Lauterbrunnen Bahnhof",
    "Lucerne Bahnhofquai",
    "Chamonix-Mont-Blanc Sud (France, near Swiss border)",
    "Geneva Bus Station",
    "Bern PostAuto Terminal",
    "Gstaad Bus Station",
    "St. Moritz Bahnhof PostAuto",
    "Verbier Village",
    "Davos Platz Postautohaltestelle",
    "Andermatt Gotthardpass",
    "Täsch Bahnhof (Shuttle to Zermatt)",
    "Flims Dorf Post",

    // France
    "Chamonix Sud Bus Station",
    "Annecy Gare Routière",
    "Grenoble Gare Routière",
    "Nice Airport (Bus to Alps)",
    "Bourg-Saint-Maurice Gare Routière",
    "Morzine Gare Routière",
    "Les Gets Gare Routière",
    "Val d'Isère Centre",
    "Courchevel 1850",
    "Megève Place du Village",

    // Italy
    "Aosta Autostazione",
    "Bolzano Autostazione",
    "Trento Autostazione",
    "Cortina d'Ampezzo Autostazione",
    "Bormio Bus Station",
    "Livigno Centro",
    "Merano Autostazione",
    "Sestriere Bus Stop",
    "Ortisei (St. Ulrich) Autostazione",
    "Canazei Piazza Marconi",

    // Austria
    "Innsbruck Hauptbahnhof Bus Terminal",
    "Salzburg Süd Busbahnhof",
    "Mayrhofen Bahnhof",
    "Lech am Arlberg Postamt",
    "Kitzbühel Hahnenkammbahn",
    "Ischgl Seilbahn",
    "Zell am See Postplatz",
    "Bad Gastein Bahnhof",
    "St. Anton am Arlberg Bahnhof",
    "Sölden Postamt",

    // Germany
    "Garmisch-Partenkirchen Bahnhof (Bus Station)",
    "Berchtesgaden Busbahnhof",
    "Oberstdorf Busbahnhof",
    "Füssen Bahnhof (Bus Station)",
    "Mittenwald Bahnhof (Bus Station)",

    // Slovenia
    "Bled Bus Station",
    "Bohinj Jezero",
    "Kranjska Gora Avtobusna Postaja"
];

// burger menu logic

const headerNav = document.getElementById('header');
const burgerIcon = document.getElementById('burger-icon');
const burgerMenu =  document.getElementById('burger-menu');
const menuLinks = burgerMenu.querySelectorAll('a');

burgerIcon.addEventListener('click', function(){
    burgerMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('active');
    if (burgerIcon.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        burgerMenu.classList.add('hidden');
        burgerIcon.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        burgerMenu.classList.add('hidden');
        burgerIcon.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// FAQ section Accordion
const faqQuestions = document.querySelectorAll(".accordion");
faqQuestions.forEach( question => {
    question.addEventListener('click', () => {
        console.log("click");
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        if (answer.style.display == "block") {
            answer.style.display = 'none';
            icon.textContent = "+";
        } else {
            answer.style.display = 'block';
            icon.textContent = "-";
        }
    });
});

// Arrival & Departure Dropdown
const departureInput = document.getElementById('departure-input');
const arrivalInput = document.getElementById('arrival-input');
const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
const arrivalDropdown = document.getElementById('arrival-dropdown');

// Departure
// Dropdown appearing
departureInput.addEventListener('focus', (event)=>{
    autocompleteDropdown.classList.remove('hidden');
    const value = event.target.value;
    renderStations(value, departureInput, autocompleteDropdown);
})

// Dropdown disappearing
departureInput.addEventListener('blur', ()=> {
    setTimeout( () => {
        autocompleteDropdown.classList.add('hidden');
    }, 200);
})

departureInput.addEventListener('keyup',  (event)=>{
    const value = event.target.value;
    renderStations(value, departureInput, autocompleteDropdown);
})

// arrival
arrivalInput.addEventListener('focus', (event) => {
    arrivalDropdown.classList.remove('hidden');
    const value = event.target.value;
    renderStations(value, arrivalInput, arrivalDropdown);
});

arrivalInput.addEventListener('blur', () => {
    setTimeout(() => arrivalDropdown.classList.add('hidden'), 200);
});

arrivalInput.addEventListener('keyup', (event) => {
    const value = event.target.value;
    renderStations(value, arrivalInput, arrivalDropdown);
});

function renderStations(value, targetInput, dropdown) {
    const filteredStations = STATIONS.filter(station =>
        station.toUpperCase().includes(value.toUpperCase().trim()));

    const filteredListElements = filteredStations.map( station => {
        const li = document.createElement("li");
        li.innerText = station;
        li.addEventListener("mousedown", () => {
            targetInput.value = station;
        })
        return li;
    })

    dropdown.innerHTML = '';
    // station not found
    if (filteredListElements.length < 1) {
        dropdown.innerHTML = '<span class="not-found-span">No Stations found</span>';
    } else {
        dropdown.append(...filteredListElements);
    }

    if (value.trim().length < 0) {
        const filteredStations = STATIONS;
    }
}

// Person counter
let c = 0;

const count = document.getElementById("counter");
const increment = document.getElementById("plus");
const decrement = document.getElementById("minus");

function inc() {
    if (c < 12) {
        c++;
        update();
    }
}

function dec() {
    if (c > 0) {
        c--;
        update();
    }
}

function update() {
    count.textContent = c;
}

increment.addEventListener("click", inc);
decrement.addEventListener("click", dec);

// Block one way
const roundTrip = document.querySelector('input[value="round"]');
const oneWay = document.querySelector('input[value="oneway"]');
const returnDate = document.getElementById('return-date');

roundTrip.addEventListener('change', () => {
    returnDate.disabled = false;
    returnDate.style.opacity = 1;
});

oneWay.addEventListener('change', () => {
    returnDate.disabled = true;
    returnDate.value = '';
    returnDate.style.opacity = 0.9;
});

// Form validation

const form = document.querySelector('form');
const departDate = document.getElementById('depart-date');
const submit = document.getElementById('submit-form');

submit.addEventListener("click", function(event) {
    event.preventDefault();
    let selectedTrip = null;
    if (roundTrip.checked) {
        selectedTrip = "round";
    } else if (oneWay.checked) {
        selectedTrip = "oneway";
    } else {
        alert("Please select a trip type (Round Trip / One Way).");
        return;
    }

    if (departureInput.value.trim() === "") {
        alert("Please enter a departure city.");
        return;
    }

    if (arrivalInput.value.trim() === "") {
        alert("Please enter an arrival city.");
        return;
    }

    if (departureInput.value.trim().toLowerCase() === arrivalInput.value.trim().toLowerCase()) {
        alert("Departure and arrival cities cannot be the same.");
        return;
    }
    if (!departDate.value) {
        alert("Please select a departure date.");
        return;
    }

    if (roundTrip.checked) {
        if (!returnDate.value) {
            alert("Please select a return date for round trip.");
            return;
        } else if (returnDate.value < departDate.value) {
            alert("Return date must be after departure date.");
            return;
        }
    }

    window.location.href = "bus-rides.html";
});