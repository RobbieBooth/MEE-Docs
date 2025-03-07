---
sidebar_position: 15
---

# onQuestionSave

Triggered on all questions in the quiz when a question is saved.

```java
    /**
     * Invoked on all questions within the quiz, when a question is
     * saved.
     *
     * Note: This method may be triggered in addition to the `onThisQuestionSave`
     * method for the same question, so ensure your implementation accounts for
     * potential overlaps.
     * @param questionState the state of the question that has been saved
     */
    public void onQuestionSave(OtherQuestionState questionState);
```