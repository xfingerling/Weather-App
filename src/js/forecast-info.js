const forecastList = document.querySelector(".forecast__days");
const forecastInfoList = document.querySelector(".forecast-info__list");

function toggleInfo(e) {
  const { target } = e;

  if (target.tagName !== "UL") {
    forecastInfoList.classList.toggle("hidden");
  }
}

forecastList.addEventListener("click", toggleInfo);