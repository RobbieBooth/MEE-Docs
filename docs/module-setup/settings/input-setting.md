---
sidebar_position: 2
---

# Input Setting
This is a setting which is an input box.

## Json configuration
`maxLines` can be a value as in a string `"1"`. It can also be set to `null` which is how you enable **Multiple Line text box**.

`maxCharacters` can be an integer value or `null` for allowing any size.

```json
{
  "type": "Input",
  "label": "Quiz Name",
  "tooltip": "Enter the name of the quiz.",
  "required": true,
  "disabled": false,
  "value": "",
  "maxCharacters": 100,
  "maxLines": "1"
}
```

## Visual Look
### Single Line
---image here
### Multiple Line
---image here