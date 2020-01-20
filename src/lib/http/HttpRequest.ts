import { HttpMethod } from './HttpMethod'

export default class HttpRequest {
    constructor(
        public url: string,
        public method: HttpMethod = HttpMethod.GET
        
    ) {

    }
}