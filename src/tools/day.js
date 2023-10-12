function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function formatTime(heure) {
    const date = new Date(heure);
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
  
    return `${hours}:${minutes}`;
  }
  
  export default formatTime;