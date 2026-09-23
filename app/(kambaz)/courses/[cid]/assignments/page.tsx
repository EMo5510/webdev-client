import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      <input placeholder="Search for Assignments" id="wd-search-assignment" /> {" "}
      <button id="wd-add-assignment-group">+ Group</button> {" "}
      <button id="wd-add-assignment">+ Assignment</button>
      <br />
      {/* h3 wd-assignments-title */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        {/* at least three AssignmentItems using cid */}
        <AssignmentItem
          cid={cid}
          aid="A1"
          title="A1 ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am |
Due May 13 at 11:59pm | 100 pts"
        ></AssignmentItem>
        <AssignmentItem
          cid={cid}
          aid="A2"
          title="A2 CSS + TAILWIND"
          details="Multiple Modules | Not available until May 13 at 12:00am |
Due May 20 at 11:59pm | 100 pts"
        ></AssignmentItem>
        <AssignmentItem
          cid={cid}
          aid="A3"
          title="A3 JS + REACT"
          details="Multiple Modules | Not available until May 20 at 12:00am |
Due May 27 at 11:59pm | 100 pts"
        ></AssignmentItem>
      </ul>
    </div>
  );
}
