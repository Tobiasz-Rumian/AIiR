export class CreateRequest {
  random: boolean;
  data?: string;
  login: string;
  tabuLength: number;
  iterationsWithoutImprovement: number;
  iterationsOfTabu: number;
}
