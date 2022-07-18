export interface ChartData {
  weight: number[];
  kcalAvg: number[];
  carbAvg: number[];
  proteinAvg: number[];
  fatAvg : number[];
  kcalSum: number;
  carbSum:number;
  proteinSum: number;
  fatSum: number;
  sugarsSum:number;
  natriumSum:number;
  cholesterolSum: number;
  saturatedfattySum:number;
  transfatSum:number;
}

export interface ChartInfo {
  data : ChartData
  labels : any
}