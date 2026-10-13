import "./index.css";

export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">Column 1</div>
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
      </div>
      <div className="wd-flex-row-container" id="wd-ai-flex">
        <div className="wd-bg-color-yellow wd-width-75px">Fixed width</div>
        <div className="wd-bg-color-gray">Sized to content</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Grows to fill the rest
        </div>
      </div>
    </div>
  );
}