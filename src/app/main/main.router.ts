import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ArtistSearchPageComponent} from "./artist/artist-search-page/artist-search-page.component";
import {ProjectSearchPageComponent} from "./project/project-search-page/project-search-page.component";
import {ClientSearchPageComponent} from "./client/client-search-page/client-search-page.component";
import {ProjectProfilePageComponent} from "./project/project-search-page/project-profile-page/project-profile-page.component";
import {ArtistProfilePageComponent} from "./artist/artist-search-page/artist-profile-page/artist-profile-page.component";
import {ClientProfilePageComponent} from "./client/client-search-page/client-profile-page/client-profile-page.component";
import {ProjectProfilePageGuestComponent} from "./project/project-search-page/project-profile-page-guest/project-profile-page-guest.component";

export const MAIN_ROUTES: Routes = [
  // Home Page Routes
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {path: 'Search', component: ProjectSearchPageComponent },
  {path: 'Project/:projectname', component: ProjectProfilePageGuestComponent },
  {path: 'artistsearch', component: ArtistSearchPageComponent},
  {path: 'artistprofile', component: ArtistProfilePageComponent },
  {path: 'clientsearch', component: ClientSearchPageComponent},
  {path: 'clientprofile', component: ClientProfilePageComponent },
  {path: 'Landing', component: LandingPageComponent}
];

export const Routing = RouterModule.forRoot(MAIN_ROUTES);

