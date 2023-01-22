const url = 'http://127.0.0.1:3000/'

const garage = 'garage'
const winners = 'winners'
const engine = 'engine'

//Garage Methods

/* Optional:
_page=[integer]
_limit=[integer]
If _limit param is passed api returns a header X-Total-Count that countains total number of records.*/
export const getCars = async () => {
    const data = await fetch(url + garage);
    const textData = await data.json()
    console.log(textData)
    return textData
}

export const getCar = async (id: number) => {
    const data = await fetch(url + garage + '/' + id);
    const textData = await data.json()
    console.log(textData)
    return textData
}

//needs data
export const createNewCar = async () => {
    const data = await fetch(url + garage, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}

export const deleteCar = async (id: number) => {
    const data = await fetch(url + garage + '/:' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}

export const updateCar = async (id: number) => {
    const data = await fetch(url + garage + '/:' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}

//Engine Methods

export const turnEngine = async (id: number, status: 'started' | 'stopped') => {
    const data = await fetch(url + engine, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}
//need to turn engine to 'started' first
export const turnEngineToDrive = async (id: number, status: 'drive') => {
    const data = await fetch(url + engine, {
        method: 'PATCH',
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}

//Winner methods

/* Optional:

_page=[integer]
_limit=[integer]
_sort=['id'|'wins'|'time']
_order=['ASC'|'DESC']

If _limit param is passed api returns a header X-Total-Count that countains total number of records.*/
export const getWinners = async () => {
    const data = await fetch(url + winners);
    const textData = await data.json()
    console.log(textData)
    return textData
}

export const getWinner = async (id: number) => {
    const data = await fetch(url + winners + '/:' + id);
    const textData = await data.json()
    console.log(textData)
    return textData
}

export const createWinner = async () => {
    const data = await fetch(url + winners, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}

export const deleteWinner = async (id: number) => {
    const data = await fetch(url + winners + '/:' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}

export const updateWinner = async (id: number) => {
    const data = await fetch(url + winners + '/:' + id, {
        method: 'PUT'
    });
    const textData = await data.json()
    console.log(textData)
    return textData
}


