// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IHttpRequest, IHttpResponse } from './http'

export interface Controller {
  handle: (httpRequest: IHttpRequest) => IHttpResponse
}
