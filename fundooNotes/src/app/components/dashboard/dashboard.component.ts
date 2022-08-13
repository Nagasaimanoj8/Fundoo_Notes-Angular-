import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;
  route: any;
  gridView:any=true;
  message:any;
  subscription: any;
  searchString:any='';

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private snackBar:MatSnackBar,private router: Router, private data:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.subscription = this. data.currentMessage.subscribe((message: any) => this.message = message)
    this.data.currentView.subscribe( flag=>this.gridView=flag)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  reloadCurrentPage() {
    window.location.reload();
   }
   searchNote(text:any){
    this.data.changeMessage(text.target.value);
    console.log(this.searchString);
  }
   grid(){
    this.gridView=true;
    this.data.changeView(this.gridView)
  }
  list(){
    this.gridView=false;
    this.data.changeView(this.gridView)
  }
  signout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/signin');
    this.snackBar.open('Note color changed','',{
      duration:2000,
  })
}
}