import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIComponentsRoutingModule } from "./ui-components-routing.module";
import { NouisliderModule } from 'ng2-nouislider';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { QuillModule } from 'ngx-quill'
import { DragulaModule } from 'ng2-dragula';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { ImageCropperModule } from 'ng2-img-cropper';
import { TagInputModule } from 'ngx-chips';
import { HttpModule } from '@angular/http';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgSelectModule } from '@ng-select/ng-select';


import { ButtonsComponent } from "./bootstrap/buttons/buttons.component";
import { ListsComponent } from "./bootstrap/lists/lists.component";
import { AlertsComponent } from "./bootstrap/alerts/alerts.component";
import { SweetAlertsComponent } from "./extra/sweet-alerts/sweet-alerts.component";
import { ToastrComponent } from "./extra/toastr/toastr.component";
import { NouiSliderComponent } from "./extra/nouislider/nouislider.component";
import { BadgesComponent } from "./bootstrap/badges/badges.component";
import { DropdownsComponent } from "./bootstrap/dropdowns/dropdowns.component";
import { InputGroupsComponent } from "./bootstrap/input-groups/input-groups.component";
import { MediaObjectsComponent } from "./bootstrap/media-objects/media-objects.component";
import { PaginationComponent } from "./bootstrap/pagination/pagination.component";
import { ProgressBarsComponent } from "./bootstrap/progress/progress.component";
import { ModalsComponent, NgbdModalContent } from "./bootstrap/modals/modals.component";
import { CollapseComponent } from "./bootstrap/collapse/collapse.component";
import { AccordionComponent } from './bootstrap/accordion/accordion.component';
import { CarouselComponent } from './bootstrap/carousel/carousel.component';
import { DatepickerComponent } from './bootstrap/datepicker/datepicker.component';
import { PopoverComponent } from './bootstrap/popover/popover.component';
import { RatingComponent } from './bootstrap/rating/rating.component';
import { TabsComponent } from './bootstrap/tabs/tabs.component';
import { TimepickerComponent } from './bootstrap/timepicker/timepicker.component';
import { TooltipComponent } from './bootstrap/tooltip/tooltip.component';
import { TypeaheadComponent } from './bootstrap/typeahead/typeahead.component';
import { NgButtonsComponent } from './bootstrap/ng-buttons/ng-buttons.component';
import { UploadComponent } from './extra/upload/upload.component';
import { EditorComponent } from './extra/editor/editor.component';
import { DragDropComponent } from './extra/drag-drop/drag-drop.component';
import { TourComponent } from './extra/tour/tour.component';
import { CropperComponent } from './extra/cropper/cropper.component';
import { TagsInputComponent } from './extra/tags-input/tags-input.component';
import { SwitchComponent } from './extra/switch/switch.component';
import { SelectComponent } from './extra/select/select.component';
import { TablesComponent } from './bootstrap/tables/tables.component';
import { NgbdSortableHeader } from './bootstrap/tables/sortable.directive';

@NgModule({
    imports: [
        CommonModule,
        UIComponentsRoutingModule,
        NouisliderModule,
        FileUploadModule,
        FormsModule,
        ReactiveFormsModule,
        JsonpModule,
        NgbModule,
        QuillModule,
        DragulaModule,
        MatchHeightModule,
        ImageCropperModule,
        TagInputModule,
        HttpModule,
        UiSwitchModule,
        NgSelectModule
    ],
    declarations: [
        ButtonsComponent,
        ListsComponent,
        AlertsComponent,
        SweetAlertsComponent,
        ToastrComponent,
        NouiSliderComponent,
        BadgesComponent,
        DropdownsComponent,
        InputGroupsComponent,
        MediaObjectsComponent,
        PaginationComponent,
        ProgressBarsComponent,
        ModalsComponent,
        CollapseComponent,
        AccordionComponent,
        CarouselComponent,
        DatepickerComponent,
        PopoverComponent,
        RatingComponent,
        TabsComponent,
        TimepickerComponent,
        TooltipComponent,
        TypeaheadComponent,
        NgbdModalContent,
        NgButtonsComponent,
        UploadComponent,
        EditorComponent,
        DragDropComponent,
        TourComponent,
        CropperComponent,
        TagsInputComponent,
        SwitchComponent,
        SelectComponent,
        TablesComponent  ,
        NgbdSortableHeader      
    ],
    entryComponents: [NgbdModalContent]
})
export class UIComponentsModule { }
