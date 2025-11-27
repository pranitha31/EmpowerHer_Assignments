function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

// Usage:
timer(2000, (message) => {
  console.log(message);
});
