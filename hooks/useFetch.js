function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setData(json);
        })
        .catch(err => {
          return err;
        });
    }, []);
  
    return data;
  }