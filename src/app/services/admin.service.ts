import { DriverDetails } from './../models/driverDetails';
import { Schedule } from './../models/schedule.response';
import { API } from './../api.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Storekeepers } from '../models/storekeeper.response';
import { ScheduleDetails } from '../models/scheduleDetails';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _httpClient: HttpClient) { }

  getListOfStorekeepers(): Observable<Storekeepers> {
    return this._httpClient.get<Storekeepers>(API.getListOfStorekeepers()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  //get bulk orders
  getbulkOrder(statusId): Observable<any> {
    return this._httpClient.get<any>(API.getbulkOrder(statusId)).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateVehicleDetails(vehicleDetails, vehicleId): Observable<any> {
    return this._httpClient
      .put<any>(API.updateVehicleDetails(vehicleId), vehicleDetails)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deleteVehicle(vehicleId): Observable<any> {
    return this._httpClient.delete<any>(API.deleteVehicle(vehicleId)).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateDriverDetails(driverDetails, driverId): Observable<any> {
    return this._httpClient
      .post<any>(API.updateDriverDetails(driverId), driverDetails)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deleteDriver(driverId): Observable<any> {
    return this._httpClient.delete<any>(API.deleteDriver(driverId)).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getDriverSheduleHistory(driverId): Observable<Schedule> {
    return this._httpClient
      .get<Schedule>(API.getDriverSchedlueHistory(driverId))
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  registerDriver(driverDetails): Observable<any> {
    return this._httpClient.post<any>(API.registerDriver(), driverDetails).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateStorekeeperDetails(storekeeperDetails, storekeeperId): Observable<any> {
    return this._httpClient
      .post<any>(API.updateStorekeeperDetails(storekeeperId), storekeeperDetails)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deleteStorekeeper(storekeeperId): Observable<any> {
    return this._httpClient.delete<any>(API.deleteStorekeeper(storekeeperId)).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  registerStorekeeper(storekeeperDetails): Observable<any> {
    return this._httpClient.post<any>(API.registerStorekeeper(), storekeeperDetails).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  storekeeperScheduleHistory(storekeeperId): Observable<any> {
    return this._httpClient.get<any>(API.storekeeperScheduleHistory(storekeeperId)).pipe(
      catchError((error) => {
        return throwError(error);
      }
      ));

  }

}
