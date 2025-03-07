---
sidebar_position: 12
---

# onQuestionResume

Triggered on all questions in the quiz when a question is resumed.

```java
/**
     * Invoked on all questions within the quiz, when a question is
     * resumed within the quiz.
     *
     * Note: This method may be triggered in addition to the `onThisQuestionResume`
     * method for the same question, so ensure your implementation accounts for
     * potential overlaps.
     * @param questionState the state of the question that has been resumed
     */
    public void onQuestionResume(OtherQuestionState questionState);
```