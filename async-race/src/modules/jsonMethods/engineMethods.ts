import { GetTurnEngineResponse, SuccessfulDrive } from '../types/data';

export default class EngineMethods {
  url: string;

  engine: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/';
    this.engine = 'engine';
  }

  turnEngine = async (id: number, status: 'started' | 'stopped') => {
    const data = await fetch(`${this.url + this.engine}?id=${id}&status=${status}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });
    const textData: GetTurnEngineResponse = await data.json();
    return textData;
  };

  // need to turn engine to 'started' first
  turnEngineToDrive = async (id: number, status: 'drive') => {
    const data = await fetch(`${this.url + this.engine}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const textData:SuccessfulDrive = await data.json();
    return textData;
  };
}
