# Complexity Analysis

## normalizeUnits()

Operations:

* Copy object
* One comparison
* Possible multiplication

Time Complexity:
O(1)
Space Complexity:
O(1)

## validateManifest()

Checks:

* containerId
* destination
* weight
* unit
* hazmat

Fixed number of operations.

Time Complexity:

O(1)

Space Complexity:

O(1)

## processManifest()

Calls:

* validateManifest()
* normalizeUnits()

Time Complexity:

O(1)

Space Complexity:
O(1)

Overall System

Time Complexity:
O(1)

Space Complexity:
O(1)
