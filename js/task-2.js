function calcAverageCalories(days) {
    let totalCalories = 0;
    for (const day of days) {
        totalCalories += day.calories;
    }
    let averageDaysCalories = 0;
    if (days.length === 0) {
        return 0;
    } else { 
        averageDaysCalories = totalCalories / days.length;
        return averageDaysCalories;
    }
}