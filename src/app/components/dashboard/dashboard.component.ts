import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/services/api.service";
import { AppConstants } from "src/app/app.constants";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public tableData:any = [];
  public selectedFilterType:string;
  public selectedSortField:string;
  public sortOrder:string;
  public filterTypes = [
    {
      'filterTypeLabel':'Genres',
      'filterTypeParam':'genres',
    },
    {
      'filterTypeLabel':'Language',
      'filterTypeParam':'language',
    },
    {
      'filterTypeLabel':'Country',
      'filterTypeParam':'country',
    },
    {
      'filterTypeLabel':'Budget',
      'filterTypeParam':'budget',
    },
    {
      'filterTypeLabel':'Title Year',
      'filterTypeParam':'title_year',
    }
  ]

  constructor(public apiService:ApiService, public appConstants:AppConstants) { }

  ngOnInit() {
    this.getMovieDataFromApi();
  }

  getMovieDataFromApi(){
    this.apiService.getMovieData().subscribe(
            response => {
             this.tableData = response;
            },
             error => {
                console.log("Error in getting movie data due to server error, hence loading from local JSON");
                this.getMovieDataFromJSON();
            });
  }

   getMovieDataFromJSON(){
    this.apiService.getMovieDataFromJson().subscribe(
            response => {
             this.tableData = response;
            },
             error => {
                console.log("Error in getting movie data from local JSON");
            });
  }

  setFilterType($event){
      this.selectedFilterType = this.filterTypes.filter(item => item.filterTypeLabel == $event.target.value)[0].filterTypeParam;
      console.log("this.selectedFilterType : ",this.selectedFilterType )
  }

  applySort(sortParam){
    
    if(sortParam!=this.selectedSortField || this.sortOrder == this.appConstants.DESCENDING_ORDER){
      this.sortOrder = this.appConstants.ASCENDING_ORDER;
    }
    else{
      this.sortOrder = this.appConstants.DESCENDING_ORDER;
    }
    this.selectedSortField = sortParam;

    if(this.sortOrder == this.appConstants.ASCENDING_ORDER){
      this.sortInAscendingOrder(sortParam);
    }
    else{
      this.sortInDescendingOrder(sortParam);
    }
  }

  // Sorts table data in ascending order
  sortInAscendingOrder(sortParam){
      this.tableData.sort((leftSide,rightSide):number => {
        if(leftSide[sortParam] < rightSide[sortParam]) return -1;
        if(leftSide[sortParam] > rightSide[sortParam]) return 1;
        return 0;
      });
  }

  // Sorts table data in descending order
  sortInDescendingOrder(sortParam){
     this.tableData.sort((rightSide,leftSide):number => {
        if(leftSide[sortParam] < rightSide[sortParam]) return -1;
        if(leftSide[sortParam] > rightSide[sortParam]) return 1;
        return 0;
      });
  }

  removeAppliedSorting(){
    if(this.selectedFilterType){
      this.selectedSortField = this.sortOrder = undefined;
    }
  }

}
