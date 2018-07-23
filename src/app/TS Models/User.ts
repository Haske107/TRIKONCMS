export class User {

  ID: string;
  UserName: string;
  Email: string;
  FName: string;
  LName: string;
  Type: string;
  Company: string;
  Bio: string;
  UploadDate: string;
  HashedPassword: string;
  Ledger: [{
    ID?: string,
    Time: number,
    Type: string
  }];
  Documents: [string];
  ProfilePicture: [string];
  Delete: boolean;

  constructor (User: any) {
    this.ID = User.ID;
    this.UserName = User.Username;
    this.Email = User.Email;
    this.FName = User.FName;
    this.LName = User.LName;
    this.Type = User.Type;
    this.Company = User.Company;
    this.Bio = User.Bio;
    this.UploadDate = User.UploadDate;
    this.HashedPassword = User.HashedPassword;
    this.Ledger = User.Ledger;
    this.Documents = User.Documents;
    this.ProfilePicture = User.ProfilePicture;
    this.Delete = User.Delete;
  }

}
