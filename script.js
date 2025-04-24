let citiesTimeZones = [
  "America/Sao_Paulo",
  "America/Los_Angeles",
  "Europe/Paris",
  "Asia/Tokyo",
  "Australia/Sydney",
];

function initCities(singleTimezone = null) {
  let citiesElement = document.querySelector("#totalCities");
  citiesElement.innerHTML = "";

  let timezonesToShow = singleTimezone ? [singleTimezone] : citiesTimeZones;

  for (let i = 0; i < timezonesToShow.length; i++) {
    let timezone = timezonesToShow[i];
    let cityId = timezone.replace("/", "-");
    let timeCity = moment().tz(timezone);

    citiesElement.innerHTML += `
      <div class="eachCityDisplay" id="city-${cityId}">
        <div class="city">
          <div class="nameCity">${timezone
            .split("/")[1]
            .replace("_", " ")}</div>
          <div class="dateCity">${timeCity.format("MMMM Do YYYY")}</div>
        </div>
        <div class="clock">${timeCity.format(
          "h:mm:ss"
        )} <small>${timeCity.format("A")}</small></div>
      </div>
    `;
  }

  if (singleTimezone) {
    citiesElement.innerHTML += `<a href="/">All cities</a>`;
  }
}

function updateAllClocks() {
  document.querySelectorAll(".eachCityDisplay").forEach((cityElement) => {
    let cityId = cityElement.id.replace("city-", "");
    let timezone = cityId.replace("-", "/");
    let timeCity = moment().tz(timezone);

    cityElement.querySelector(".dateCity").textContent =
      timeCity.format("MMMM Do YYYY");
    cityElement.querySelector(".clock").innerHTML = `${timeCity.format(
      "h:mm:ss"
    )} <small>${timeCity.format("A")}</small>`;
  });
}

function handleCityChange(event) {
  if (event.target.value === "current") {
    initCities(moment.tz.guess());
  } else if (event.target.value) {
    initCities(event.target.value);
  }
}

initCities();
setInterval(updateAllClocks, 1000);

document
  .querySelector("#selectCity")
  .addEventListener("change", handleCityChange);
