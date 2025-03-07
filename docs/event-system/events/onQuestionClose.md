---
sidebar_position: 13
---

# onQuestionClose

Triggered on all questions in the quiz when a question is closed.

```java
    /**
     * Invoked on all questions within the quiz, when a question
     * is closed.
     *
     * Note: This method may be triggered in addition to the `onThisQuestionClose`
     * method for the same question, so ensure your implementation accounts for
     * potential overlaps.
     * @param questionState the state of the question that has been closed
     */
    public void onQuestionClose(OtherQuestionState questionState);
```