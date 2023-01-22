export class EngineMethods {
  url: string;
  engine: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/'
    this.engine = 'engine'
  }

  turnEngine = async (id: number, status: 'started' | 'stopped') => {
    const data = await fetch(this.url + this.engine, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}
//need to turn engine to 'started' first
turnEngineToDrive = async (id: number, status: 'drive') => {
    const data = await fetch(this.url + this.engine, {
        method: 'PATCH',
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}
}