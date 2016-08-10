export class Restaurant {
  public rating: number[] = [];
  public averageRatingFloat: number = 0;
  public averageRating: string = "This restaurant has not been reviewed yet."
  constructor(public name: string, public specialty: string, public address: string, public price: number, public id: number) {
  }
}
