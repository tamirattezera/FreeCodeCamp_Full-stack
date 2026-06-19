# Design Notes

## Responsibilities

normalizeUnits()

Purpose:

Convert weight into kilograms.

Complexity:
O(1)

validateManifest()

Purpose:

Protect the system against invalid data.

Checks:

- containerId
- destination
- weight
- unit
- hazmat

Complexity:
O(1)

processManifest()
Purpose:

Coordinate validation and normalization.

Uses:

validateManifest()
normalizeUnits()
Complexity:
O(1)

Software Principles

- Immutability

- Separation of concerns

- Function composition

- Defensive programming

- Single responsibility principle
