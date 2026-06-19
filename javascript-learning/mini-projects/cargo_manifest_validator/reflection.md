# Reflection

## What I Learned

### Object Copying

Using:

```js
{ ...manifest }
```

creates a new object and prevents mutation.

### Validation

Programs should never trust input.

Always validate before processing.

### Separation of Concerns

Each function should do one thing well.

normalizeUnits()

validateManifest()

processManifest()

### Function Composition

Small functions combine into larger systems.

### Defensive Programming

Expect:

- missing values
- invalid values
- NaN
- wrong types

and handle them safely.

### Engineering Lesson

Algorithm first.

Code second.

Small systems teach the same principles used in:

- REST APIs
- Django backends
- Databases
- Payment systems
- AI pipelines
