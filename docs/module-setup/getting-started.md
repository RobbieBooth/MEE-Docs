---
sidebar_position: 1
---

# Creating a Module

When it comes to creating a module for the system, there can be many different approaches, however for the sake of simplicity we will describe how to create a module based on the implementation of the [Basic Question Module](/docs/category/basicquestion). Since the [Basic Question Module](/docs/category/basicquestion) is made up of all the basic types of questions that would traditionally be used in a quiz, it is a good starting point to fork off of this module and modify it how you wish. Although if you wish to create your own one from scratch it is also easy and will be described exactly how to do it in these docs.

## Java Project Structure

The Spring Boot java side is the main focus when it comes to creating a module. Since the module serves its webpage from it's static resources and modules are defined it, we will not need to touch the front-end to make it work. 

```txt
+---java
|   \---org
|       \---robbie
|           \---modulareducationenvironment
|               |   ...
|               |   QuizQuestion.java
|               |
|               +---factory
|               |       AbstractQuestionFactory.java
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
|               \---modules
|                   |
|                   \---BasicQuestion
|                       |   ...
|                       |   QuestionEventHandler.java
|                       |
|                       +---controller
|                       |   \---questionManager
|                       |           BasicQuestion.java
|                       |           FillInTheBlank.java
|                       |           LongAnswer.java
|                       |           MultipleChoice.java
|                       |           Numerical.java
|                       |           ShortAnswer.java
|                       |           TrueOrFalse.java
|                       |
|                       \---factory
|                               QuestionFactory.java
|
\---resources
    |   ...
    |   modules.yaml
    |
    \---static
        |   ...
        |
        \---modules
            \---BasicQuestion
                |   defaultQuestionSettings.json
                |   index.html
                |   vite.svg
                |
                \---assets
                        index-CyA_mAQ3.css
                        index-kQA_Q_US.js
```

### Module Structure

```txt
|
\---ExampleModule
|   ...
|   QuestionEventHandler.java
|
|
\---factory
      QuestionFactory.java
```

A modules structure should consist of two essential components:

- QuestionEventHandler.java
- factory/QuestionFactory.java

#### QuestionEventHandler
This is the bread and butter of the event approach. It is where the [quiz and question events](/docs/category/events) are called. This section is where the main processing of events will end up happening. 

It must implement `QuizQuestion` from `org.robbie.modulareducationenvironment.QuizQuestion`. `QuizQuestion` contains all of the [events](/docs/category/events) that could be called. 

**It must also have a constructor in-built for `ModuleSaveService` and `ModuleMessagingService`**. **If these are not in the constructor an error will happen when running application**. 

The Component **must also have a unique name** inside the `@Component()`. For example here we have used `ExampleModuleEventHandler`. The reason it must have a name is to stop conflicts with other modules event handlers.
```java
@Component("ExampleModuleEventHandler")
public class QuestionEventHandler implements QuizQuestion {

    private final ModuleSaveService moduleSaveService;
    private final ModuleMessagingService moduleMessagingService;

    @Autowired
    public QuestionEventHandler(ModuleSaveService moduleSaveService, ModuleMessagingService moduleMessagingService) {
        this.moduleSaveService = moduleSaveService;
        this.moduleMessagingService = moduleMessagingService;
    }
    ...
}
    
```


#### factory/QuestionFactory
This is where the entry point page is specified, the default `BaseSetting` to be returned for the module, the place to create the settings for the quiz and the place to create the questions additional data.

##### createPage
This is where you return a string reference to the page that you want the app to enter. For example if your page was in your modules resource folder and named `index.html` then you would return `index.html`

```java
    /**
     * Subclasses will override this method in order to create specific question
     * objects.
     */
    public abstract String createPage(QuestionState state);
```

##### getDefaultQuestionSettings
This is typically where you would extract and return to the quiz system the default settings for the module. These are the settings used in the settings page when setting up the question using the module.

```java
    /**
     * Subclasses will override this method in order to create specific default question settings.
     */
    public abstract BaseSetting getDefaultQuestionSettings(Map<String, String> globalSettings);
```

For a module, the implementation could look like this, where there is a file inside the `resources/static/modules/ExampleModule` called `defaultQuestionSettings.json` and this file contains your default settings. Example:
```java
    @Override
    public BaseSetting getDefaultQuestionSettings(Map<String, String> globalSettings) {
        try{
            System.out.println(ModuleLoader.getModuleResourcePath(MODULE_NAME) + "defaultQuestionSettings.json");

            ClassPathResource resource = new ClassPathResource("static"+ModuleLoader.getModuleResourcePath(MODULE_NAME) + "defaultQuestionSettings.json");

            return QuestionSettingReader.readSettingJson(resource.getFile());
        } catch (IOException e) {
            return new ErrorSetting(
              "Error",
                    "An error happened getting the quiz settings for "+MODULE_NAME,
                    false,
                    false,
                    "Error loading default settings for "+MODULE_NAME,
                    e.getMessage()
            );
        }
    }
```

##### createQuestionSettings
The Question settings are typically used by your webapp front-end page to generate the questions. For example,  [Basic Question Module](/docs/category/basicquestion) uses settings to create the questions and [additionalData](getting-started#createadditionaldata) to store the users answers.

```java
    /**
     * Subclasses will override this method in order to create specific question settings map.
     * It will be a map of string to object. This will be used by the questions display to generate the questions
     */
    public abstract Map<String, Object> createQuestionSettings(Map<String, String> globalSettings, BaseSetting baseSetting);
```

##### createAdditionalData
This is the starter additional data when a quiz is started. It is strongly recommended to **have at least `isSubmitted` in the additional data** as the quiz front end uses it to determine whether to enable the submit and save button. For example, [Basic Question Module](/docs/category/basicquestion) uses `isSubmitted` to determine if the quiz question has been submitted and to display answers.

```java
    /**
     * Subclasses will override this method in order to create additional data for the quiz. The additional data made here is the default on the quiz start.
     * It will be a map of string to object. This will be used by the questions to load in the data.
     */
    public abstract Map<String, Object> createAdditionalData(Map<String, String> globalSettings, Map<String,Object> questionSettings);
```


## Setting up the modules UI/resources
```txt
|
\---resources
    |   ...
    |   modules.yaml
    |
    \---static
        |   ...
        |
        \---modules
            \---ExampleModule
                |   defaultQuestionSettings.json
                |   index.html
                \   ...
```

For setting up the modules UI in the java project. You will want to place the modules UI inside a folder with its exact name. **This must be the same name as the module holding the java code and the same name we are going to add into `modules.yaml`.** If it is not the same name an error will occur.

So inside that folder you will place any static assets that you need for your module. This could be `index.html` which you use through your [createPage](getting-started#createPage). You could also hold your default question settings here by having a file called `defaultQuestionSettings.json` and using it inside [getDefaultQuestionSettings](getting-started.md#getdefaultquestionsettings).

Any static assets **must** be placed inside the `resources/static` folder since Spring Boot will not see any static assets placed inside the java code folder.

### Using scripts or css with my html
Commonly you would not just use html, you would also want to use css and javascript with your html file. Well to do this inside of the modular environment you will need to add a small line inside the html file for configuration to allow the assists to be requested.

```html
<!doctype html>
<html lang="en">
  <head>
    <!--    Need to add this base to ensure pathing-->
      // highlight-next-line
    <base href="/modules/ExampleModule/" />

    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
      // highlight-start
    <script type="module" crossorigin src="assets/index-example.js"></script>
    <link rel="stylesheet" crossorigin href="assets/index-example.css">
      // highlight-end
  </head>
  <body>
    <div id="root" style="width: 100%"></div>
  </body>
</html>
```

Make sure that this base is included `<base href="/modules/ExampleModule/" />` where `ExampleModule` is your module name. Also make sure that all of the assets do not have a slash on the front. Ie: make sure it is `assets/index-example.js` and **not** `/assets/index-example.js` because the slash will cause issues with pathing.

## Setting up `modules.yaml`
Lastly `modules.yaml` is essential for the application to even register or interact with your module. You must define the `globalSettings` for the module and the `name` here, otherwise your module may not be recognised.

Here is the yaml file for including [AI Question Generation Module] and the [Basic Question Module]:
```yaml
modules:
  - name: AIMultiChoice
    globalSettings:
      OPEN_API_KEY: "apikey...."
      ...
  - name: BasicQuestion
    globalSettings:
      ...
```

To include your module you would add it in under the modules heading. For example, if your module was named `ExampleModule` then it would look like this:
```yaml
modules:
  - name: AIMultiChoice
    globalSettings:
      OPEN_API_KEY: "apikey...."
      ...
  - name: BasicQuestion
    globalSettings:
      ...
    // highlight-start
  - name: ExampleModule
    globalSettings:
      ...
  // highlight-end
```
Where you would define your `globalSettings`. Your `globalSettings` could be anything from API Keys to allowed question types. This should typically be the properties that the admin setting up the module would define.

### Getting the module's `globalSettings` inside [QuestionEventHandler](getting-started.md#questioneventhandler)

To get the `globalSettings` you defined on the Module inside the [QuestionEventHandler](getting-started.md#questioneventhandler) you would get the module from the `QuestionState` and the get the global settings from that. E.G:
```java
//OPEN_API_KEY could be null if it is not defined on the modules globalSettings
String open_api_key = (String) questionState.getModule().getGlobalSettings().get("OPEN_API_KEY");
```



