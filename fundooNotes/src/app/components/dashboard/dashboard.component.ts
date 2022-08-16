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
  token: any;
  message:any;
  subscription: any;
  searchString:any='';
  gridView:any=true;

  private _mobileQueryListener: () => void;

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
    this.router.navigateByUrl('/signin');
    this.snackBar.open('Signed Out Successfully','',{
      duration:2000,
  })
}

}