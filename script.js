setInterval(function () {
  let losAngeles = document.querySelector("#los_angeles");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    let dateLosAngeles = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    losAngelesDate.innerHTML = dateLosAngeles;
    let timeLosAngeles = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss[<small>]A[</small>]");
    losAngelesTime.innerHTML = timeLosAngeles;
  }

  let paris = document.querySelector("#paris");
  if (paris) {
    let parisDate = paris.querySelector(".date");
    let parisTime = paris.querySelector(".time");
    let dateParis = moment().tz("Europe/Paris").format("MMMM Do YYYY");
    parisDate.innerHTML = dateParis;
    let timeParis = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss[<small>]A[</small>]");
    parisTime.innerHTML = timeParis;
  }

  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoDate = tokyo.querySelector(".date");
    let tokyoTime = tokyo.querySelector(".time");
    let dateTokyo = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
    tokyoDate.innerHTML = dateTokyo;
    let timeTokyo = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss[<small>]A[</small>]");
    tokyoTime.innerHTML = timeTokyo;
  }

  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDate = sydney.querySelector(".date");
    let sydneyTime = sydney.querySelector(".time");
    let dateSydney = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
    sydneyDate.innerHTML = dateSydney;
    let timeSydney = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss[<small>]A[</small>]");
    sydneyTime.innerHTML = timeSydney;
  }
});

function displayCityTime(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#display");
    cityElement.innerHTML = `
  <div class="displayCities">
    <div class="city">
      <div>${cityName}</div>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
  </div>
`;
  }
}

let selectCity = document.querySelector("#selectCity");
selectCity.addEventListener("change", displayCityTime);
