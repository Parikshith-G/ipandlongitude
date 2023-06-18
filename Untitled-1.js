const stealIP = async function () {
  try {
    const ip = await fetch("https://api.ipify.org?format=json");
    const data = await ip.json();
    console.log("", data);
    alert("i stole your ip " + data.ip);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

stealIP();
const loc = async function () {
  try {
    navigator.geolocation.getCurrentPosition(
      (crd) => {
        const coordinates = crd.coords;
        const lat = coordinates.latitude;
        const lon = coordinates.longitude;
        alert(
          `got your latitude and longitude also: latitide- ${lat}, longitude-${lon}`
        );
      },
      (err) => {
        console.log(err);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
loc();
