import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-semibold">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue={aid}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label htmlFor="wd-description" className="mb-1 block font-semibold">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={5}
        defaultValue="The assignment is available online Submit a link to the landing page of"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <div className="mb-4 grid grid-cols-12 gap-4">
        <label
          htmlFor="wd-points"
          className="col-span-12 pt-2 md:col-span-3 md:text-right"
        >
          Points
        </label>
        <div className="col-span-12 md:col-span-9">
          <input
            id="wd-points"
            defaultValue={100}
            className="w-full rounded border border-neutral-300 px-3 py-2"
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <label
          htmlFor="wd-group"
          className="col-span-12 pt-2 md:col-span-3 md:text-right"
        >
          Assignment Group
        </label>
        <div className="col-span-12 md:col-span-9">
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className="w-full rounded border border-neutral-300 px-3 py-2"
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <label
          htmlFor="wd-display-grade-as"
          className="col-span-12 pt-2 md:col-span-3 md:text-right"
        >
          Display Grade as
        </label>
        <div className="col-span-12 md:col-span-9">
          <select
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
            className="w-full rounded border border-neutral-300 px-3 py-2"
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Total Points</option>
          </select>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <label
          htmlFor="wd-submission"
          className="col-span-12 pt-2 md:col-span-3 md:text-right"
        >
          Submission Type
        </label>
        <form
          id="wd-submission"
          className="col-span-12 rounded border border-neutral-300 p-4 md:col-span-9"
        >
          <select
            id="wd-submission-type"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="INPERSON">In-person</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" name="wd-entry-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" name="wd-entry-options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="wd-entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="wd-entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="wd-entry-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </form>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <label
          htmlFor="wd-assign"
          className="col-span-12 pt-2 md:col-span-3 md:text-right"
        >
          Assign
        </label>
        <form
          id="wd-assign"
          className="col-span-12 rounded border border-neutral-300 p-4 md:col-span-9"
        >
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <select
            id="wd-assign-to"
            defaultValue="EVERYONE"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          >
            <option value="EVERYONE">Everyone</option>
            <option value="INSTRUCTORS">Instructors</option>
            <option value="STUDENTS">Students</option>
          </select>
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            type="date"
            defaultValue="2024-05-13"
            min="1900-01-01"
            max="2026-12-31"
            id="wd-due-date"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                defaultValue="2024-05-06"
                min="1900-01-01"
                max="2026-12-31"
                id="wd-available-from"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-semibold"
              >
                Until
              </label>
              <input
                type="date"
                min="1900-01-01"
                max="2026-12-31"
                id="wd-available-until"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </form>
      </div>

      <label htmlFor="wd-ai-editor-notes" className="mb-1 block font-semibold">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={3}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <hr className="mb-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-2 text-black no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
