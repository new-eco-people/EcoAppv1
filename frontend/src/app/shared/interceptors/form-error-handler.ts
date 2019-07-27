import { FormGroup } from '@angular/forms';
import * as lodash from 'lodash';

export interface ServerError {
    error: string;
    errors: {};
    stackTrace: string[];
}
