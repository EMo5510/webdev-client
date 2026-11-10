"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const findAssignment = useAssignmentsStore((state) => state.findAssignment);
  const existing = findAssignment(aid);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const [assignment, setAssignment] = useState<Omit<Assignment, "_id">>(
    existing ?? { ...emptyAssignment, course: cid },
  );

  const save = () => {
    if (existing) {
      updateAssignment({ ...assignment, _id: existing._id });
    } else {
      addAssignment({ ...assignment, course: cid });
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-semibold">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>
      <label htmlFor="wd-description" className="mb-1 block font-semibold">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={5}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
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
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
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
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
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
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
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
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
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
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
