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
