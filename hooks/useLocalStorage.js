function useLocalStorage(key, operationType) {
    try {
        if (operationType === 'GET') {
            const data = window.localStorage.getItem(key);
            return { data: JSON.parse(data), status: 'SUCCESS' };
        }
    } catch(err) {
        return { data: err, status: 'ERROR' };
    }
    
}