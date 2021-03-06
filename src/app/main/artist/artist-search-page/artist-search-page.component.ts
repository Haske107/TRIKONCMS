import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../artist.service";
import {User} from "../../../TS Models/User";
import {Router} from "@angular/router";
import {SlideInOut} from "./artist-search.animation";

@Component({
  selector: 'app-artist-search-page',
  templateUrl: './artist-search-page.component.html',
  styleUrls: ['./artist-search-page.component.css'],
  animations: [SlideInOut]
})
export class ArtistSearchPageComponent implements OnInit {

  Artists: User[];

  constructor(private adminService: ArtistService, private router: Router) { }

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

  navToHome() {
    this.router.navigateByUrl('/Landing');
  }

}
