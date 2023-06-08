const toaster = {
    brand: "Coline",
    colour: ["Black" + "Silver"],
    toastiness: 1-4,
    functions: ["Toast", "Defrost", "Reheat", "Cancel"],
    power: false,
    controlLever: function onSwitch() {
        power.textContent = "on";
        
    },
};


var controlLeverButton = document.querySelector("#control-lever");

function onSwitch() {
    power.textContent = "on";
};

controlLeverButton.onclick = onSwitch;

document.getElementById("brand").textContent = toaster.brand;
document.getElementById("colour").textContent = toaster.colour;

// var controlLeverButton = document.getElementById("control-lever");
// controlLeverButton.addEventListener("click", function onClick());