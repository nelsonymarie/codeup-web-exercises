`strict`

mapboxgl.accessToken =
    "pk.eyJ1IjoibWFkbWFyY29zIiwiYSI6ImNsNWw0YWNobTBnY3AzanN4dzdpemhpeG0ifQ.OO7BegDPBkP3SV0CaLbnyQ";


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-98.4916, 29.4252])
}

function setupMap(center) {
    let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15
    })

    let nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    let directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}