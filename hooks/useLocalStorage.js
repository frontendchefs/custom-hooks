function useLocalStorage({ key, value }, operationType) {
    let payload = {};

    try {
        if (operationType === 'GET') {
            const data = window.localStorage.getItem(key);
            payload = { data: JSON.parse(data), status: 'SUCCESS' };
        } else if (operationType === 'SET') {
            window.localStorage.setItem(key, JSON.stringify(value));
            payload = { status: 'SUCCESS' };
        } else if (operationType === 'REMOVE') {
            window.localStorage.removeItem(key);
            payload = { status: 'SUCCESS' };
        } else if (operationType === 'CLEAR') {
            window.localStorage.clear();
        }
     } catch(err) {
        payload = { data: err, status: 'ERROR' };
    }
    return payload;
}