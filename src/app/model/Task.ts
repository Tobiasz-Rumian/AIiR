export class Task {
  id: number;
  status: number;
  type: string;
  date: string;
  progress: number;
  tabuLength: number;
  iterationsWithoutImprovement: number;
  iterationsOfTabu: number;
}
