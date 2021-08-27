// create map
var map = L.map("mapid").setView([-27.222633, -49.6455874], 15)

// create and add tileLayer
L
    .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

// create icon
const icon = L.icon({
    iconUrl: `./images/map-marker.svg`,
    iconSize: [58, 68],
    iconAnchor: [28, 68],
})

var marker

// create and add marker
map.on('click', function (event) {
    const inCoord = [
        document.querySelector(`input[name="lat"]`),
        document.querySelector(`input[name="lng"]`)
    ]
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    inCoord[0].value = lat
    inCoord[1].value = lng
    // remove a marker. That's so smart!
    marker && map.removeLayer(marker)
    // create and add marker
    marker = L.marker([lat, lng], { icon }).addTo(map)
})
// add the photos field
function addPhotosField() {
    // Catch the photo container
    const container = document.querySelector("#images")
    // Check if the field is empty. If do, don't add to container
    if (document.querySelector(".new-upload input").value == "") {
        return
    }
    // Catch the container to duplicate .new-upload
    // Create a clone of the last image added
    const newFieldContainer = container.lastElementChild.cloneNode(true)
    // Clean the field before add in image container
    newFieldContainer.firstElementChild.value = ""
    // Add the new image at images container
    container.appendChild(newFieldContainer)
}
function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll(".new-upload")
    if (fieldsContainer.length < 2) {
        span.parentNode.firstElementChild.value = ""
        return
    }
    // delete the container
    span.parentNode.remove()
}
// yes or not selection
function toggleSelect(event) {
    // remove the .active class at buttons
    document.querySelectorAll(".button-select button")
        .forEach(item => item.classList.remove("active"))
    // put the .active class at select button
    const button = event.currentTarget
    button.classList.add("active")
    // update my hidden input with the select value
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}
function validate(event) {
    const loc = [
        document.querySelector(`input[name="lat"]`),
        document.querySelector(`input[name="lng"]`)
    ]
    const needLatLng = !(loc[0].value && loc[1].value)
    if (needLatLng) {
        event.preventDefault()
        alert('Insira uma localização')
    }
}