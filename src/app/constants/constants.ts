export class Constants{
  static url : string = process.env.ENV === 'production' ? 'http://localhost:80' : 'http://localhost:3000';
}
