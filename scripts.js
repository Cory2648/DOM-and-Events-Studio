// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
          takeOff.addEventListener("click", function (event) {
              window.confirm("Confirm that the shuttle is ready for takeoff.");
              if (true) {
                  document.getElementById("flightStatus") = "Shuttle in flight.";
                  document.getElementById("shuttleBackground").background = "blue";
                  document.getElementById("spaceShuttleHeight") += 10000;
              };
          });
    let land = document.getElementById("landing");
        land.addEventListener("click", function (event) {
              window.alert("The shuttle is landing. Landing gear engaged.");
                 document.getElementById("flightStatus") = "The shuttle has landed.";
                 document.getElementById("shuttleBackground").background = "green";
                 document.getElementById("spaceShuttleHeight") = 0;
          });
    let abort = document.getElementById("missionAbort");
        abort.addEventListener("click", function (event) {
              window.confirm("CConfirm that you want to abort the mission.");
              if (true) {
                  document.getElementById("flightStatus") = "Mission aborted.";
                  document.getElementById("shuttleBackground").background = "green";
                  document.getElementById("spaceShuttleHeight") = 0;
              };
          });
preventDefault();
});