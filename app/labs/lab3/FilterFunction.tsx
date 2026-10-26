export default function FilterFunction() {
  // eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 4, 5, 6];
  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  const numbersLessThan2 = numberArray1.filter((a) => a < 2);
  const numbersGreaterThan5 = numberArray1.filter((a) => a >= 5);
  return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2} <br />
      evenNumbers = {evenNumbers}                 <br />
      oddNumbers = {oddNumbers}                   <br />
      numbersLessThan2 = {numbersLessThan2}       <br />
      numbersGreaterThan5 = {numbersGreaterThan5}
      <hr />
    </div>
  );
}