async function fetchDataSpaceXData() {
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v4/launches/latest"
      );
      const data = await response.json();

      const lengthResponse = await fetch(
        "https://api.spacexdata.com/v4/launches"
      );
      const lengthData = await lengthResponse.json();
      // Total Launches
      document.getElementById("total-launches").innerText =
        lengthData.length;

      const { name, date_utc, rocket, launchpad } = data;

      document.getElementById("launch-name").innerText = name;
      document.getElementById("launch-date").innerText = new Date(
        date_utc
      ).toUTCString();
      document.getElementById("rocket-name").innerText = rocket;
      document.getElementById("launchpad-name").innerText = launchpad;
    } catch (error) {
      console.error("Error fetching SpaceX data:", error);
    }
  }

  fetchDataSpaceXData();