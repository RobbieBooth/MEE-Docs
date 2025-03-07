---
sidebar_position: 3
---

# Select Setting
This is a setting for selecting either a single value or the option of a multiple select.

## Json configuration
`value` could be one of the values in the `availableValues`, this would be for the default value. It can be set to `null` for nothing default.

`availableValues` is an array of string values which can be selected. 

```json
    {
  "type": "Select",
  "label": "Question Type",
  "tooltip": "Select the type of questions to be generated",
  "required": true,
  "disabled": false,
  "value": null,
  "availableValues": ["Multiple Choice", "Fill in the Blank"],
  "multiSelect": false
}
```

## Visual Look
### Checkbox
---image here
### Switch
---image here