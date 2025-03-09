---
sidebar_position: 2
---

# modules.yaml Config
This module requires `OPEN_API_KEY` to be set inside `modules.yaml`. This is an [openAI](https://platform.openai.com/docs/overview) API key, it is the AI which is used to generate the questions.

```yaml
modules:
  - name: AIMultiChoice
    globalSettings:
      OPEN_API_KEY: "api_key_example..."
```