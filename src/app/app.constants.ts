import { Injectable } from "@angular/core";

@Injectable()
export class AppConstants {
    
    //SORT CONSTANTS
    public readonly ASCENDING_ORDER = "asc";
    public readonly DESCENDING_ORDER = "desc";

    // API CONSTANT
    public readonly API_LINK = "http://starlord.hackerearth.com/movies";
    public readonly JSON_PATH = "src/assets/json/movies.json"


}