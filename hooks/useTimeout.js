function useTimeout(cb, interval) {
    useEffect(() => {
      setTimeout(cb, interval);
      return () => {
        clearTimeout(cb, interval);
      };
    }, []);
}
