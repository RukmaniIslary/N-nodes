export function getFloatY(
 time:number,
 speed:number = 2
){

 return (
  Math.sin(time * speed)
  * 0.15
 );

}