export function collectDataElement(data) {
  var dimensions = "";
  data.forEach((element) => {
    dimensions += element.id;
  });
  return [...new Set(dimensions.split(";"))].join(";");
}
export function collectPeriod(period, count) {
  let calculatedPeriod = [];
  while(count) {
    calculatedPeriod.push(period--);
    count-=1;
  }
  return calculatedPeriod.reverse().join(';');
}