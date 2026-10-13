export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-black">
        The text in this paragraph is black but{" "}
        <span className="wd-fg-color-blue">this text is blue</span>
      </p>
    </div>
  );
}