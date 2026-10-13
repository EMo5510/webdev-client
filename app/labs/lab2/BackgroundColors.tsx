export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <div id="wd-ai-bg" className="wd-bg-color-gray wd-fg-color-blue">
        Background and foreground classes can be combined on the same element,
        one setting the background color and the other the text color.
      </div>
      <p className="wd-bg-color-yellow wd-fg-color-black">
        This background of this paragraph is yellow with black text
      </p>
    </div>
  );
}