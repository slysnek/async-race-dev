import { GetWinnersResponse } from '../types/data';

export default class WinnersMethods {
  url: string;

  winners: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/';
    this.winners = 'winners';
  }

  /* Optional:

_page=[integer]
_limit=[integer]
_sort=['id'|'wins'|'time']
_order=['ASC'|'DESC']

If _limit param is passed api returns a header
X-Total-Count that countains total number of records. */
  getWinners = async () => {
    const data = await fetch(this.url + this.winners);
    const textData: GetWinnersResponse = await data.json();
    return textData;
  };

  getWinner = async (id: number) => {
    const data = await fetch(`${this.url + this.winners}/:${id}`);
    const textData = await data.json();
    return textData;
  };

  createWinner = async () => {
    const data = await fetch(this.url + this.winners, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const textData = await data.json();
    return textData;
  };

  deleteWinner = async (id: number) => {
    const data = await fetch(`${this.url + this.winners}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const textData = await data.json();
    return textData;
  };

  updateWinner = async (id: number) => {
    const data = await fetch(`${this.url + this.winners}/:${id}`, {
      method: 'PUT',
    });
    const textData = await data.json();
    return textData;
  };
}
