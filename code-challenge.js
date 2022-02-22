const compare = (a, b) => a -b;

const smallestChange = (arr) => {
    let minValue = 1;
    arr.sort(compare);
    for (const value of arr) {
        if (value > minValue) {
            return minValue;
        }
        minValue += value;
    }
    return minValue;
}

