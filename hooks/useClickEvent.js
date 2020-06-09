function useClickEvent({ element, id }, fn) {
  let targetElement;
  if (element) {
    targetElement = element;
  }
  if (id) {
    targetElement = document.getElementById(id);
  }
  useEffect(() => {
    targetElement.addEventListener("click", fn);
    return () => {
      targetElement.removeEventListener("click", fn);
    };
  }, []);
}
  