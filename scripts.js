const carData = {
    'Electric': [
        { name: 'Tesla Model S', description: 'A luxury electric vehicle, long range and 5/5 saftey features.', image: 'images/tesla.jpg' },
        { name: 'Nissan Leaf', description: 'An affordable electric vehicle, cheap and for small family.', image: 'images/nissan.jpg' }

    ],
    'Sedan': [
        { name: 'Honda Accord', description: 'A luxury sporty family sedan, has great technology inside and out.', image: 'images/honda.webp' },
        { name: 'Toyota Camary', description: 'An affordable Sedan, has lots of room inside and has great MPG.', image: 'images/toyota.jpg' }
    ],
    'Coupe': [
        { name: 'Honda Civic Coupe', description: 'A Reliable coupe with 2 doors, big mod community.', image: 'images/civic.jpg' },
        { name: 'Acura Integra', description: 'An sporty coupe, feels comfortable inside and has great fast engine.', image: 'images/accura.jpg' }
    ],
    'Truck': [
        { name: 'Toyota Tacoma', description: 'A Tacoma is the best and reliable truck, had 1 million miles once!', image: 'images/tacoma.jpg' },
        { name: 'Ford F-150', description: 'A Ford F-150 is very popular and very cool, has a crazy tow weight as well.', image: 'images/f150.jpeg' }
    ],
    'Sport': [
        { name: 'Chevy Corvette', description: 'A fast v8 car that has great handling. Also Great on the tracks, has top speeds of 200.', image: 'images/corvette.jpg' },
        { name: 'Porsche 911', description: 'One of the most fastest gear shifting car with a 10 speed, has top speeds of 180 and 0-60 in 3.5 seconds.', image: 'images/911.jpg' }
    ],
};


function displayCars(category) {
    const cars = carData[category];
    const optionsContainer = document.getElementById('car-display-container');
    optionsContainer.innerHTML = '';


    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'car-option';
        carElement.innerHTML = `
            <h3>${car.name}</h3>
            <img src="${car.image}" alt="${car.name}" style="width: 100px; cursor: pointer;">
        `;


        carElement.addEventListener('click', function() {
            addToFinalSelections(car);

            removeCarOption(car.name);
        });

        optionsContainer.appendChild(carElement);
    });
}

// This function adds the selected car to "Your Selections"
function addToFinalSelections(car) {
    const finalSelectionContainer = document.getElementById('final-selections-list');
    if (!finalSelectionContainer) return;

    const carElement = document.createElement('div');
    carElement.className = 'final-car-selection';
    carElement.innerHTML = `
        <h4>${car.name}</h4>
        <img src="${car.image}" alt="${car.name}" style="width: 100px;">
    `;

    // Click event for the final selection to enlarge
    carElement.addEventListener('click', function() {
        showFinalCar(car);
    });

    finalSelectionContainer.appendChild(carElement);
}

// This function removes the non-selected car option
function removeCarOption(selectedCarName) {
    const options = Array.from(document.getElementsByClassName('car-option'));
    options.forEach(option => {
        if (!option.innerHTML.includes(selectedCarName)) {
            option.remove(); // Remove non-selected car options
        }
    });
}
function imageClick(event) {
    event.target.style.opacity = '0.6';
    setTimeout(function() {
        event.target.style.opacity = '1';
    }, 200);
}


carElement.querySelector('img').addEventListener('click', imageClick);
// Function to show the final car selection in a large box
function showFinalCar(car) {
    const fullScreenContainer = document.createElement('div');
    fullScreenContainer.id = 'final-car-fullscreen';
    fullScreenContainer.innerHTML = `
        <div class="final-car-content">
            <h2>Congrats on your new car selection!!</h2>
            <h3>${car.name}</h3>
            <img src="${car.image}" alt="Image of ${car.name}">
            <p>It should be delivered to you in a couple of minutes!</p>
            <button onclick="closeFullScreen()">Close</button>
        </div>
    `;
    document.body.appendChild(fullScreenContainer);
}

// Function to close the final car selection box
function closeFullScreen() {
    const fullScreenContainer = document.getElementById('final-car-fullscreen');
    if (fullScreenContainer) {
        fullScreenContainer.remove();
    }
}

const finalSelectionsList = document.createElement('div');
finalSelectionsList.id = 'final-selections-list';
document.body.appendChild(finalSelectionsList);
