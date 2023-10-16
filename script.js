// Get inputed number and carrier icon elements
const phoneNumberEl = document.querySelector("#phone");
const carrierIconEl = document.querySelector("#carrierIcon");

// Define carrier prefixes
const carrierPrefixes = {
  MTN: [
    "+234703",
    "+234706",
    "+234803",
    "+234806",
    "+234810",
    "+234813",
    "+234814",
    "+234816",
    "+234903",
    "+234906",
    "+234913",
  ],
  GLO: ["+234705", "+234805", "+234807", "+234811", "+234815", "+234905"],
  AIRTEL: [
    "+234701",
    "+234708",
    "+234802",
    "+234808",
    "+234812",
    "+234902",
    "+234907",
    "+234901",
    "+234912",
    "+234904",
  ],
  "9MOBILE": ["+234809", "+234817", "+234818", "+234908", "+234909"],
};

// Listen for changes in the input and invoke checkCarrier
phoneNumberEl.addEventListener("input", checkNumInputStyle);

// Declare a function to check the carrier based on input
function checkNumInputStyle() {
  let phoneNumber = phoneNumberEl.value;
  const carrier = phoneNumberEl.pattern;

  // Remove leading "0" if present
  if (phoneNumber[0] == "0") {
    phoneNumber = "+234" + phoneNumber.slice(1);
  }

  // Check the carrier based on pattern or prefixes
  if (phoneNumber.length === 14) {
    if (carrier) {
        checkPatternCarrier(phoneNumber, carrier);
    } else {
        checkCarrier(phoneNumber);
    }
  } else if (phoneNumber.length > 1 && phoneNumber.length < 14) {
    updateCarrierIcon("loading");
  } else {
    updateCarrierIcon("Invalid Number");
  }
}

// Check the carrier based on a specified pattern
function checkPatternCarrier(phoneNumber, carrier) {
  let detectedCarrier = "Unknown Carrier";
  let isCarrier = carrierPrefixes[carrier.toUpperCase()].some((prefix) =>
    phoneNumber.startsWith(prefix)
  );

  if (isCarrier) {
    detectedCarrier = carrier;
  }

  updateCarrierIcon(detectedCarrier);
}

// Check the carrier based on prefixes
function checkCarrier(phoneNumber) {
  let detectedCarrier = "Unknown Carrier";

  // Iterate through carrier prefixes and check for a match
  for (const carrier in carrierPrefixes) {
    if (
      carrierPrefixes[carrier].some((prefix) => phoneNumber.startsWith(prefix))
    ) {
      detectedCarrier = carrier;
      break;
    }
  }

  updateCarrierIcon(detectedCarrier);
}

// Update the carrier icon based on the detected carrier
function updateCarrierIcon(detectedCarrier) {
  if (detectedCarrier == "Unknown Carrier") {
    carrierIconEl.innerHTML = "Unknown Carrier";
  } else if (detectedCarrier == "Invalid Number") {
    carrierIconEl.innerHTML = "Invalid Number";
  } else if (detectedCarrier == "loading") {
    carrierIconEl.innerHTML = `<img src="./images/loading.gif" alt="loading Icon" width="50px" />`;
  } else {
    carrierIconEl.innerHTML = `<img src="./images/${detectedCarrier.toLowerCase()}.jpg" alt="${detectedCarrier.toLowerCase()} Icon" width="50px" />`;
  }
}
