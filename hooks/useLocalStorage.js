function useLocalStorage({ key, value }, operationType) {
    try {
        if (operationType === 'GET') {
            const data = window.localStorage.getItem(key);
            return { data: JSON.parse(data), status: 'SUCCESS' };
        } else if (operationType === 'SET') {
            window.localStorage.setItem(key, JSON.stringify(value));
            return { status: 'SUCCESS' };
        } else if (operationType === 'REMOVE') {
            window.localStorage.removeItem(key);
            return { status: 'SUCCESS' };
        }
     } catch(err) {
        return { data: err, status: 'ERROR' };
    }
    
}