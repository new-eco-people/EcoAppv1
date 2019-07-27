import { ErrorHandler, Inject } from '@angular/core';
import { ToasterService } from '../services/toaster/toaster.service';

export class AppErrorHandler implements ErrorHandler {

    constructor(@Inject(ToasterService) private toastService: ToasterService) {}

    handleError(error: string): void {
        this.toastService.error(error);
        console.log(error);
    }

}
