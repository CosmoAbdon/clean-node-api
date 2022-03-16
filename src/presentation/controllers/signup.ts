/* eslint-disable @typescript-eslint/no-unused-vars */

import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { IHttpRequest, IHttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: 'Success'
    }
  }
}
