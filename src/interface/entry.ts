export interface Entry {
  _id: string;
  description: string;
  createAt: number;
  status: EntryStatus; // A,B,C,D, énding, in-porgress, finished
}

export type EntryStatus = "pending" | "in-progress" | "finished";
