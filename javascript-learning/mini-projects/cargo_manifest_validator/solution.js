function normalizeUnits(manifest) {
  // Create a copy to avoid mutating the original object
  const normalized = { ...manifest };

  // Convert pounds to kilograms
  if (normalized.unit === "lb") {
    normalized.weight *= 0.45;
    normalized.unit = "kg";
  }

  return normalized;
}
function validateManifest(manifest) {
  const errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  // Check whether errors object is empty
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalizedManifest = normalizeUnits(manifest);

    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);

    console.log(errors);
  }
}

// ========================================
// Demo Tests
// ========================================

// Valid manifest
processManifest({
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false,
});

// Invalid manifest
processManifest({
  containerId: -88,
  destination: "Soledad",
  weight: NaN,
});

// Missing fields
processManifest({
  destination: "Watsonville",
  hazmat: true,
});