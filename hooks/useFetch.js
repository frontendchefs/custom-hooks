function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setData(json);
        })
        .catch(err => {
          setError(err);
        });
    }, []);
  
    return { data, error };
  }