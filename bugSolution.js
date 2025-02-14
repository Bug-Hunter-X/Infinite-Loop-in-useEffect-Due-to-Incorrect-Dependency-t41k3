```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This runs only once after the component mounts
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function to prevent memory leaks
  }, []); // Empty dependency array means this runs only once

  return <div>Count: {count}</div>;
}
```