---
sidebar_position: 11
---

# onQuestionStart

Triggered on all questions in the quiz when a question is started.

```java
    /**
     * Invoked when any question within the quiz is first opened by the user.
     *
     * Note: This method may be triggered in addition to the `onThisQuestionStart`
     * method for the same question, so ensure your implementation accounts for
     * potential overlaps.
     * @param questionState the state of the question that has been started
     */
    public void onQuestionStart(OtherQuestionState questionState);
```