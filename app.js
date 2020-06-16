const options = ['Flyrite', 'Chuys', 'EastSide Pie', 'Mad Greens'];

const randomSelect = () => {
    const selected = Math.floor(Math.random() * Math.floor(options.length));
    return selected;
};