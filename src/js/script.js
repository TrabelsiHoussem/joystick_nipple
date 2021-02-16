var dynamic = {
  zone: document.getElementById("zone_joystick"),
  color: "blue",
  multitouch: true,
};
var semi = {
  zone: document.getElementById("zone_joystick"),
  mode: "semi",
  catchDistance: 150,
  color: "white",
};
var static = {
  zone: document.getElementById("zone_joystick"),
  mode: "static",
  position: {
    left: "0%",
    top: "0%",
  },
  color: "red",
};

//fix the option you need
var options = semi;
var joystick;


//create the Nipple
createNipple();

function bindNipple() {
  joystick
    .on("move", function (evt, data) {
      debug(evt, data);
    })
    .on("pressure", function (evt, data) {
      debug(evt, data);
    });
}

function createNipple() {
  if (joystick) {
    joystick.destroy();
  }
  joystick = nipplejs.create(options);
  bindNipple();
}

// Print data into elements
function debug(evt, data) {
  setTimeout(function () {
    if (data.instance) {
      let coord = data.instance.frontPosition;
      console.log(
        "X axis:",
        map(coord.x, -50, 50, -1, 1),
        "Y axis:",
        map(-coord.y, -50, 50, -1, 1)
      );
      //axis reversing
    }
  }, 0);
}

//reversing axis
//mapping function  https://www.arduino.cc/reference/en/language/functions/math/map/
function map(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
