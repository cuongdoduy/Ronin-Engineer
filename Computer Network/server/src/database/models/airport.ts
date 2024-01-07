export class Airport {
  private static airportMockData = new Map([
    ['1', { id: '1', name: 'Airport 1' }],
    ['2', { id: '2', name: 'Airport 2' }],
    ['3', { id: '3', name: 'Airport 3' }],
    ['4', { id: '4', name: 'Airport 4' }],
    ['5', { id: '5', name: 'Airport 5' }],
    ['6', { id: '6', name: 'Airport 6' }],
    ['7', { id: '7', name: 'Airport 7' }],
    ['8', { id: '8', name: 'Airport 8' }],
    ['9', { id: '9', name: 'Airport 9' }],
    ['10', { id: '10', name: 'Airport 10' }]
  ]);


  public static async getAirport(id: string) {
    return this.airportMockData.get(id);
  }
}

export default Airport;
