function calculateTimeTogether() {
    const startDate = new Date('2024-08-31T00:00:00');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    let timeString = '';
    if (years > 0) {
        timeString += years + (years === 1 ? ' ano, ' : ' anos, ');
    }
    if (months > 0) {
        timeString += months + (months === 1 ? ' mês e ' : ' meses e ');
    }
    timeString += days + (days === 1 ? ' dia' : ' dias');

    return timeString;
}

document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time-together');
    if (timeElement) {
        timeElement.textContent = calculateTimeTogether();
    }
});
