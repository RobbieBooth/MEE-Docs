---
sidebar_position: 4
---

# onQuizSubmit

Triggered when a quiz is submitted.

```java
    /**
     * Called only once when the whole quiz is submitted. The save methods are called before submitted.
     * @param quizState the state of the quiz the student has submitted
     */
    public void onQuizSubmit(QuizState quizState);
```