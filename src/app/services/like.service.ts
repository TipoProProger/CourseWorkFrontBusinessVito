import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LikeService {

    constructor(private http: HttpClient) { }

    private businessAPI_URL = 'http://localhost:8080/likes/';

    addLike(id) {
        this.http.post(this.businessAPI_URL + "like/" + String(id), null).subscribe();
    }
    
    addDislike(id) {
        this.http.post(this.businessAPI_URL + "dislike/" + String(id), null).subscribe();
    }
}
