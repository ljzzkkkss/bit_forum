export class Constants{
  static url : string = process.env.ENV === 'production' ? 'http://localhost:8088' : 'http://localhost:3000';
}
