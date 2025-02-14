```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop
    setCount(count + 1); 
  }, [count]); // The dependency is 'count', which changes every time setCount is called

  return <div>Count: {count}</div>;
}
```