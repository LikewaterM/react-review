function getLocalTime(nS) {
    const time = new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');
    const sub1 = time.substring(0, 9)
    const sub2 = time.substring(9)
    return sub1 + ' ' + sub2     
}

export {
    getLocalTime
}