function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setIsLoading(false);
          setData(json);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, []);
  
    return { data, error, isLoading };
  }