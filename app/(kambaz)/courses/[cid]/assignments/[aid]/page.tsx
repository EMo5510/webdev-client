import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={aid} />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Total Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission">Submission Type</label>
            </td>
            <td>
              <form id="wd-submission">
                <select id="wd-submission-type">
                  <option value="ONLINE">Online</option>
                  <option value="INPERSON">In-person</option>
                </select>
                <br />
                <label>Online Entry Options</label>
                <br />
                <input
                  type="checkbox"
                  name="wd-entry-options"
                  id="wd-text-entry"
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input
                  type="checkbox"
                  name="wd-entry-options"
                  id="wd-website-url"
                />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input
                  type="checkbox"
                  name="wd-entry-options"
                  id="wd-media-recordings"
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input
                  type="checkbox"
                  name="wd-entry-options"
                  id="wd-student-annotation"
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
                <br />
                <input
                  type="checkbox"
                  name="wd-entry-options"
                  id="wd-file-upload"
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </form>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
              <form id="wd-assign">
                <br />
                <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                <select id="wd-assign-to" defaultValue="EVERYONE">
                  <option value="EVERYONE">Everyone</option>
                  <option value="INSTRUCTORS">Instructors</option>
                  <option value="STUDENTS">Students</option>
                </select>
                <br />
                <br />
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input
                  type="date"
                  defaultValue="2024-05-13"
                  min="1900-01-01"
                  max="2026-12-31"
                  id="wd-due-date"
                />
                <br />
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="wd-available-from">
                          Available from
                        </label>
                      </td>
                      <td>
                        <label htmlFor="wd-available-until">Until</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="date"
                          defaultValue="2024-05-06"
                          min="1900-01-01"
                          max="2026-12-31"
                          id="wd-available-from"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          min="1900-01-01"
                          max="2026-12-31"
                          id="wd-available-until"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">
        Save
      </Link>
    </div>
  );
}
