const toaster = {
    brand: "Coline",
    colour: "Black" + " " + "and" + " " + "Silver",
    toastiness: [1, 1.5, 2, 2.5, 3, 3.5, 4],
    functions: ["Toast", "Defrost", "Reheat", "Cancel"],
    power: false,
    controlLever: function () {
        toaster.power = !toaster.power;
    },
};

// display whether the toaster is on or off
function displayPower() {
    var powerSpan = document.getElementById("power");
    if (toaster.power) {
        powerSpan.textContent = "on";
    } else {
        powerSpan.textContent = "off";
    }
}

displayPower();

// control lever switching on and off
var controlLeverButton = document.querySelector("#control-lever");
controlLeverButton.addEventListener("click", toggleSwitch);

function toggleSwitch() {
    toaster.controlLever();
    displayPower();
}

// cancel button
var cancelToast = document.getElementById("cancel-btn");
cancelToast.addEventListener("click", putOff);

function putOff() {
    toaster.power = false;
    displayPower();
}

document.getElementById("brand").textContent = toaster.brand;
document.getElementById("colour").textContent = toaster.colour;
