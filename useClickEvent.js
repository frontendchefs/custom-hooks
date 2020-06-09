function useClickEvent(targetElement, fn) {
    useEffect(() => {
      targetElement.addEventListener("click", fn);
  
      return () => {
        targetElement.removeEventListener("click", fn);
      };
    }, []);
  }
  