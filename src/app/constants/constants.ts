export class Constants{
  static url : string = process.env.ENV !== 'production' ? 'http://180.76.167.170:8088' : 'http://localhost:3000';
}
