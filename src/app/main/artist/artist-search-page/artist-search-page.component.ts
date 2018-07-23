import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../artist.service";
import {User} from "../../../TS Models/User";
import {ClientService} from "../../client/client.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-artist-search-page',
  templateUrl: './artist-search-page.component.html',
  styleUrls: ['./artist-search-page.component.css']
})
export class ArtistSearchPageComponent implements OnInit {

  Artists: User[];

  constructor(private adminService: ArtistService) { }

  ngOnInit() {
    const newUser = new User({
    ID: '',
    UserName: 'JHaskell',
    Email: 'JHaskell@trikon.xyz',
    FName: 'John',
    LName: 'Haskell',
    Type: 'Artist',
    Company: 'Trikon',
    Bio: 'I code, film, and chill',
    UploadDate: '',
    HashedPassword: 'SecretPassword',
    Ledger: [],
    Documents: [],
    ProfilePicture: [],
    Delete: false,
    });

    this.adminService.getArtists().subscribe(
      Response => console.log(Response)
    )
  }

}
