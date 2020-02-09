function initMap() {
  const position = { lat: -34.397, lng: 150.644 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: position,
    zoom: 14
  });
  const marker = new google.maps.Marker({ position, map });

  console.log("xxxxxxxxxxxxxxx");
}
