# JS Topic: Promises

---

<img src="https://media0.giphy.com/media/l1J9wZJLPywQuKovK/giphy.gif" style="width: 80%;" />

---

## Promises: a solution to callback problems

- Promises have as their goal to make it easier to write asynchronous code
- They are a clever code device to straighten up callback-based code

---

## Promises

- In order to receive the value from a promise, we have to call its `.then()` method, and pass it a callback function.
- `.then()` method makes the distinction between two callbacks:
  - `successCallback` to which it passes a value in case of success
  - `errorCallback` to which it passes an `Error` object.

---

- Initially the Promise is **Pending**.
- Eventually it will **settle** by either being
  - **fulfilled** (success)
  - **rejected** (error)

```js
let promise = new Promise((resolve, reject) => {
  resolve("done");
  reject(new Error("…")); // ignored
});

// 'resolve' and 'reject' are very much like 'return'
```

---

- **Only one** of `successCallback` or `errorCallback` will ever be called.
- The`errorCallback` is optional, but without it, we need to handle the error ourselves somewhere down the `.then` chain

```js
// Promise: Example 1
const isItBacon = (word) => {
  return new Promise((resolve) => {
    if (word.toLowerCase() === "bacon") {
      resolve("YUM!!");
    } else {
      reject("YUCK!");
    }
  });
};
```

---

### `Promise` chaining:

- The `.then` method of a Promise returns a **new Promise**.
- The new Promise returned by calling `.then` will settle in the following way, depending on the return value of the `successCallback`:
  - is not a Promise, then the new Promise will be fulfilled with the return value of the `successCallback`.
  - is a Promise, the new Promise will settle in the same way as the Promise returned from the `successCallback`

_Since `.then()` returns a new Promise, this means we can "chain" `.then()` calls to create a waterfall of asynchronous operations._

---

### Remember this:

```js
// Example of Callback hell
const tellWorld = (message, callback) => {
  console.log(message);
  callback();
};

tellWorld(
  "welcome",
  tellWorld(
    "This is my story",
    tellWorld(
      "It is just beginning",
      tellWorld(
        "And could go on forever",
        tellWorld("but it might kill me to tell it this way", () =>
          console.log("the end")
        )
      )
    )
  )
);
```

---

- chaining takes care of nested callbacks.
- By separating the success and error callbacks, we can more easily reuse functions like `JSON.parse`
- We don't have to bubble up errors manually anymore

---

## Example with `fetch`

```js
fetch("/cat-message")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    updateConversation(data.message);
  });

// let's break it down
```

---

- If an error is not handled in a certain `.then`, it will propagate to the new Promise created by `then`
- This means that we can write a chain of multiple `then`s with only `successCallback`s, and tack on a last `then` at the end with a `null` for `successCallback`, and a generic `errorCallback`.

_This pattern is so common that a shortcut method called `catch` exists which only takes an `errorCallback`_

```js
// Promise example 2
const isItBacon = (word) => {
  return new Promise((resolve, reject) => {
    if (word.toLowerCase() === "bacon") {
      resolve("YUM!!");
    } else {
      reject("YUCK!");
    }
  });
};
```

---

- We will use Promises over Node-style callbacks wherever possible.

_Many popular NPM libraries will have a Promise-based equivalent._
