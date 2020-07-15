import { AjaxError } from 'rxjs/ajax';


export interface ApiError extends AjaxError {
    response: {
        error: string;
    };
}
