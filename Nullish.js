// Nullish and Falsy Tricky Code Detection with Answers

// 1. Nullish Coalescing with Falsy Values
let num = 0;
let result = num ?? 5;
console.log("1. Output:", result); // Output: 0
// Explanation: `??` only checks for `null` and `undefined`. Since `0` is neither, it does not use the fallback value 5.

// 2. Using `??` with `undefined`
let name;
console.log("2. Output:", name ?? "Unknown"); // Output: "Unknown"
// Explanation: `name` is `undefined`, which is nullish, so the fallback value "Unknown" is used.

// 3. Combining `||` and `??`
let status = 0;
let message = (status || "Inactive") ?? "No Status";
console.log("3. Output:", message); // Output: "Inactive"
// Explanation: `||` takes precedence over `??`. Since `status` is `0` (falsy), "Inactive" is chosen before `??` is even evaluated.

// 4. Handling `null` with Boolean Logic
let userName = null;
if (!userName) {
  console.log("4. Output: No name provided!"); // Output: "No name provided!"
} else {
  console.log("4. Output:", userName);
}
// Explanation: `null` is falsy, so the `if` condition is true, and "No name provided!" is printed.

// 5. Nullish Coalescing with Explicit `null`
let discount = null;
let appliedDiscount = discount ?? 10;
console.log("5. Output:", appliedDiscount); // Output: 10
// Explanation: `discount` is `null`, a nullish value, so the fallback value 10 is used.

// 6. Falsy Behavior of Empty Strings
let input = "";
let fallback = input || "Default input";
console.log("6. Output:", fallback); // Output: "Default input"
// Explanation: An empty string (`""`) is falsy, so the fallback value "Default input" is used.

// 7. `undefined` with Logical AND (`&&`)
let user;
let isLoggedIn = user && "User is logged in";
console.log("7. Output:", isLoggedIn); // Output: undefined
// Explanation: `user` is `undefined`, which is falsy. With `&&`, falsy values immediately stop evaluation, so `undefined` is returned.

// 8. Short-circuiting with `null` and `||`
let city = null;
let location = city || "Unknown";
console.log("8. Output:", location); // Output: "Unknown"
// Explanation: `city` is `null`, which is falsy, so the fallback value "Unknown" is used.

// 9. Multiple Logical Operators with Nullish Values
let count = 0;
let result9 = (count || null) ?? 100;
console.log("9. Output:", result9); // Output: 100
// Explanation: `count` is `0`, which is falsy. The `||` evaluates to `null`, and since `null` is nullish, `??` applies the fallback value 100.

// 10. `??` with `false`
let isActive = false;
let status10 = isActive ?? "Unknown status";
console.log("10. Output:", status10); // Output: false
// Explanation: `false` is not nullish, so `??` does not use the fallback value. The result remains `false`.
