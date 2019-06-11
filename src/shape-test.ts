import Shape from './shape';

export default function shape_test() {
  const unit: Shape = Shape.Unit(undefined);
  const point: Shape = Shape.Point([1, 2]);
  const circle: Shape = Shape.Circle({center: [1, 2], radius: 3});
  const triangle: Shape = Shape.Triangle([[1, 2], [2, 3], [3, 4]]);

  const shapes: Shape[] = [unit, point, circle, triangle];

  for (const shape of shapes) {
    switch (shape.tag) {
      case 'Unit':
        console.log(`Unit: ${shape.value}`);
        break;
      case 'Point':
        console.log(`Point: ${shape.value}`);
        break;
      case 'Circle':
        console.log(`Circle: ${shape.value}`);
        break;
      case 'Triangle':
        console.log(`Triangle: ${shape.value}`);
        break;
    }
  }
}
