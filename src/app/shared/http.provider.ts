import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpProvider {
  constructor(private readonly http: HttpClient) {}

  async get<T>(url: string, params?: any, customHeaders: any = {}): Promise<T> {
    const headers = await this.generateHeaders(customHeaders);

    return this.http.get<T>(url, { params, headers }).toPromise();
  }

  async post<T>(url: string, body?: any, customHeaders: any = {}): Promise<T> {
    const headers = await this.generateHeaders(customHeaders);

    return this.http.post<T>(url, body, { headers }).toPromise();
  }

  async put<T>(url: string, body?: any, customHeaders: any = {}): Promise<T> {
    const headers = await this.generateHeaders(customHeaders);

    return this.http.put<T>(url, body, { headers }).toPromise();
  }

  async delete<T>(
    url: string,
    params?: any,
    customHeaders: any = {}
  ): Promise<T> {
    const headers = await this.generateHeaders(customHeaders);

    return this.http.delete<T>(url, { headers, params }).toPromise();
  }

  protected generateHeaders(customHeaders: any = {}) {
    const basicHeaders = {};

    const headers = {
      ...basicHeaders,
      ...customHeaders,
    };

    return new HttpHeaders(headers);
  }
}
