export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        <div>parent background (shows through the margin)</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">border (the red ring)</span>
          <span className="wd-box-model-padding-label">padding</span>
          <div className="wd-box-model-content">content</div>
          <span className="wd-box-model-margin-label">
            margin: the 20px gray gap (transparent)
          </span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 200px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 200px includes padding and border
        </div>
        {/* No box-sizing declared, so this falls back to the content-box
            default and renders 260px wide (200 + 2*20 padding + 2*10 border).
            Only box-sizing: border-box keeps the declared 200px width. */}
        <div className="wd-box-sizing-default">
          default: no box-sizing declared, same as content-box
        </div>
        <div className="wd-box-sizing-width-change">
            width change box: width 300px, border box
        </div>
      </div>
    </div>
  );
}