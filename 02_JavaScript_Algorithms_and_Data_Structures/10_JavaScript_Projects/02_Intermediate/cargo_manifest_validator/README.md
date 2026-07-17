# Cargo Manifest Validator

## Overview

The Cargo Manifest Validator is a small backend system that validates and processes shipping container manifests.

The system performs three responsibilities:

1. Validation
2. Normalization
3. Processing

The design follows software engineering principles:

- Separation of concerns
- Pure functions
- Immutability
- Defensive programming
- Function composition

## Features

### Validation

Checks:

- containerId
- destination
- weight
- unit
- hazmat

Reports:

- Missing fields
- Invalid values

### Unit Normalization

Converts:

lb → kg

Using:

1 lb = 0.45 kg

### Processing

Valid manifests:

Validation success: {containerId}
Total weight: {weight} kg

Invalid manifests:

Validation error: {containerId}
{errors}

## Architecture

manifest
↓
validateManifest()
↓
errors?
├── Yes → log errors
└── No
↓
normalizeUnits()
↓
processManifest()

## Principles

- Pure functions
- No mutation
- O(1) algorithms
- Small composable functions
- Defensive validation
