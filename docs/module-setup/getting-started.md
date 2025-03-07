---
sidebar_position: 1
---

# Getting Started



## Create a docs version

Release a version 1.0 of your project:

```txt
+---java
|   \---org
|       \---robbie
|           \---modulareducationenvironment
|               |   ...
|               |
|               +---authentication
|               |       ...
|               |
|               +---classes
|               |       ...
|               |
|               +---eventHandler
|               |       ...
|               |
|               +---factory
|               |       AbstractQuestionFactory.java
|               |
|               +---jwt
|               |       ...
|               |
|               +---moduleHandler
|               |       ConfigLoader.java
|               |       Module.java
|               |       ModuleConfig.java
|               |       ModuleConfigProvider.java
|               |       ModuleController.java
|               |       ModuleLoader.java
|               |       ModuleMessagingService.java
|               |       ModuleSaveService.java
|               |
|               +---modules
|               |   +---AIMultiChoice
|               |   |   |   QuestionCreator.java
|               |   |   |   QuestionEventHandler.java
|               |   |   |   QuestionSettings.java
|               |   |   |
|               |   |   +---controller
|               |   |   |       AIQuestionController.java
|               |   |   |
|               |   |   +---factory
|               |   |   |       QuestionFactory.java
|               |   |   |
|               |   |   +---generation
|               |   |   |   |   GenerateQuestion.java
|               |   |   |   |
|               |   |   |   \---questionManager
|               |   |   |           FillInTheBlank.java
|               |   |   |           MultipleChoice.java
|               |   |   |           MultipleChoiceQuestion.java
|               |   |   |           OptionHolder.java
|               |   |   |
|               |   |   +---model
|               |   |   |       AIQuestionModel.java
|               |   |   |
|               |   |   \---view
|               |   |           AIQuestionView.html
|               |   |
|               |   \---BasicQuestion
|               |       |   QuestionCreator.java
|               |       |   QuestionEventHandler.java
|               |       |   QuestionSettings.java
|               |       |
|               |       +---controller
|               |       |   \---questionManager
|               |       |           BasicQuestion.java
|               |       |           FillInTheBlank.java
|               |       |           LongAnswer.java
|               |       |           MultipleChoice.java
|               |       |           Numerical.java
|               |       |           ShortAnswer.java
|               |       |           TrueOrFalse.java
|               |       |
|               |       \---factory
|               |               QuestionFactory.java
|               |
|               +---mongodb
|               |       ...
|               |
|               +---questionBank
|               |       Question.java
|               |       Quiz.java
|               |       QuizAttemptRepository.java
|               |       QuizRepository.java
|               |       studentQuestionAttempt.java
|               |       studentQuizAttempt.java
|               |
|               +---quiz
|               |       ...
|               |
|               +---settings
|               |   \---dataTypes
|               |       |   QuizSettings.java
|               |       |   SettingsController.java
|               |       |   Tuple.java
|               |       |
|               |       \---questionSettings
|               |           |   QuestionSettingReader.java
|               |           |   ValueHolder.java
|               |           |
|               |           +---settings
|               |           |       BaseSetting.java
|               |           |       ConditionalBoolSetting.java
|               |           |       ConditionalSelectSetting.java
|               |           |       DateSetting.java
|               |           |       DescriptionSetting.java
|               |           |       ErrorSetting.java
|               |           |       FileInputSetting.java
|               |           |       GroupSetting.java
|               |           |       InputSetting.java
|               |           |       ListSetting.java
|               |           |       SelectSetting.java
|               |           |       TagInputSetting.java
|               |           |       ToggleSetting.java
|               |           |
|               |           \---types
|               |                   FileAcceptType.java
|               |                   SettingType.java
|               |                   ToggleDisplayType.java
|               |
|               +---userManagement
|               |       ...
|               |
|               \---websockets
|                       ...
|
\---resources
    |   application.properties
    |   modules.yaml
    |
    \---static
        |   app.js
        |   DefaultQuizSettings.json
        |   main.css
        |
        \---modules
            +---AIMultiChoice
            |   |   defaultQuestionSettings.json
            |   |   index.html
            |   |   vite.svg
            |   |
            |   \---assets
            |           index-CyA_mAQ3.css
            |           index-kQA_Q_US.js
            |
            \---BasicQuestion
                |   defaultQuestionSettings.json
                |   index.html
                |   vite.svg
                |
                \---assets
                        index-CyA_mAQ3.css
                        index-kQA_Q_US.js
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
