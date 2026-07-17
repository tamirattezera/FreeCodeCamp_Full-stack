# Pseudocode

FUNCTION normalizeUnits(manifest)

copy ← copy of manifest

IF copy.unit = "lb"

    copy.weight ← copy.weight × 0.45

    copy.unit ← "kg"

RETURN copy

END FUNCTION


FUNCTION validateManifest(manifest)

errors ← empty object

CHECK containerId

CHECK destination

CHECK weight

CHECK unit

CHECK hazmat

RETURN errors


END FUNCTION


FUNCTION processManifest(manifest)

errors ← validateManifest(manifest)

IF errors is empty

    PRINT validation success

    normalizedManifest ← normalizeUnits(manifest)

    PRINT total weight

ELSE

    PRINT validation error

    PRINT errors

END FUNCTION
