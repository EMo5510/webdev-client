export default function RadioLabelPatterns() {
  return (
    <>
      <h5>Label next to the input (uses htmlFor)</h5>
      {/* Sibling label + htmlFor */}
      <input type="radio" name="radio-beside" id="wd-radio-beside-yes" />
      <label htmlFor="wd-radio-beside-yes">Yes</label>
      <input type="radio" name="radio-beside" id="wd-radio-beside-no" />
      <label htmlFor="wd-radio-beside-no">No</label>
      <br />

      <h5>Label wrapping the input (no htmlFor needed)</h5>
      {/* Wrapping label — no htmlFor needed */}
      <label>
        <input type="radio" name="radio-wrap" /> Yes
        <input type="radio" name="radio-wrap" /> No
      </label>
      <br />

      <h5>Separate label and input (not side by side)</h5>
      With htmlFor, the caption and control do not have to sit next to each other:
      <br />
      {/* Separate placement still works with htmlFor */}
      <label htmlFor="wd-radio-distant-a">Option A</label>
      {/* ... elsewhere in the layout ... */}
      <input type="radio" name="radio-distant" id="wd-radio-distant-a" />
      <br />
      <label htmlFor="wd-radio-distant-b">Option B</label>
      <input type="radio" name="radio-distant" id="wd-radio-distant-b" />
    </>
  );
}
