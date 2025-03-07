---
sidebar_position: 14
---

# onQuestionSubmit

Triggered on all questions in the quiz when a question is submitted.

```java
    /**
     * Invoked on all questions within the quiz, when a question is
     * submitted. The save methods are called before submitted.
     *
     * Note: This method may be triggered in addition to the `onThisQuestionSubmit`
     * method for the same question, so ensure your implementation accounts for
     * potential overlaps.
     * @param questionState the state of the question that has been submitted
     */
    public void onQuestionSubmit(OtherQuestionState questionState);
```