"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until?: string;
  editing?: boolean;
};

export const emptyAssignment: Omit<Assignment, "_id" | "course"> = {
  title: "New Assignment",
  description: "",
  points: 100,
  due: "",
  available: "",
  until: "",
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Omit<Assignment, "_id">) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  editAssignment: (assignmentId: string) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: assignmentsJson as Assignment[],
  findAssignment: (assignmentId) =>
    get().assignments.find((a) => a._id === assignmentId),
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  editAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a,
      ),
    })),
}));
