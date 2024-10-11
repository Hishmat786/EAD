// const car = {
//     brand: "Tesla",
//     model: "Model S",
//     start() {
//       return `Starting ${this.brand} ${this.model}`;
//     }
//   };
  
//   console.log(car.start());
  
const x = "engine";
const y = 4.0;
  
const car2 = {
    model: "Ferrari",
    [x]: y,
    speed() {
      return `The ${this.model} has an engine of ${this.engine}L`;
    }
};
  
console.log(car2.speed());
  



