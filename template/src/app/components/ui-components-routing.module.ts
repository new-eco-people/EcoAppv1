import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { ModalsComponent } from "./bootstrap/modals/modals.component";
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
import { NgButtonsComponent } from "./bootstrap/ng-buttons/ng-buttons.component";
import { UploadComponent } from './extra/upload/upload.component';
import { EditorComponent } from './extra/editor/editor.component';
import { DragDropComponent } from './extra/drag-drop/drag-drop.component';
import { TourComponent } from './extra/tour/tour.component';
import { CropperComponent } from './extra/cropper/cropper.component';
import { TagsInputComponent } from './extra/tags-input/tags-input.component';
import { SwitchComponent } from './extra/switch/switch.component';
import { SelectComponent } from './extra/select/select.component';
import { TablesComponent } from './bootstrap/tables/tables.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },      
      
      {
        path: 'lists',
        component: ListsComponent,
        data: {
          title: 'Lists'
        }
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        data: {
          title: 'Alerts'
        }
      },
      {
        path: 'sweetalerts',
        component: SweetAlertsComponent,
        data: {
          title: 'Sweet Alerts'
        }
      },
      {
        path: 'toastr',
        component: ToastrComponent,
        data: {
          title: 'Toastr'
        }
      },     
      {
        path: 'nouislider',
        component: NouiSliderComponent,
        data: {
          title: 'NoUI Slider'
        }
      },
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          title: 'Quill Editor'
        }
      },
      {
        path: 'upload',
        component: UploadComponent,
        data: {
          title: 'Upload'
        }
      },
      {
        path: 'dragndrop',
        component: DragDropComponent,
        data: {
          title: 'Drag and Drop'
        }
      },
      {
        path: 'tour',
        component: TourComponent,
        data: {
          title: 'Tour'
        }
      },
      {
        path: 'cropper',
        component: CropperComponent,
        data: {
          title: 'Cropper'
        }
      },
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'Badges'
        }
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'inputgroups',
        component: InputGroupsComponent,
        data: {
          title: 'Input Groups'
        }
      },    
      {
        path: 'media',
        component: MediaObjectsComponent,
        data: {
          title: 'Media Objects'
        }
      },
      {
        path: 'pagination',
        component: PaginationComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'progress',
        component: ProgressBarsComponent,
        data: {
          title: 'Progress Bars'
        }
      },
      {
        path: 'models',
        component: ModalsComponent,
        data: {
          title: 'Models'
        }
      },
      {
        path: 'collapse',
        component: CollapseComponent,
        data: {
          title: 'Collapse'
        }
      },
      {
        path: 'accordion',
        component: AccordionComponent,
        data: {
          title: 'Accordion'
        }
      },
      {
        path: 'carousel',
        component: CarouselComponent,
        data: {
          title: 'Carousel'
        }
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
        data: {
          title: 'Datepicker'
        }
      },
      {
        path: 'popover',
        component: PopoverComponent,
        data: {
          title: 'Popovers'
        }
      },
      {
        path: 'rating',
        component: RatingComponent,
        data: {
          title: 'Rating'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'timepicker',
        component: TimepickerComponent,
        data: {
          title: 'Timepicker'
        }
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
        data: {
          title: 'Tooltips'
        }
      },
      {
        path: 'typeahead',
        component: TypeaheadComponent,
        data: {
          title: 'Typeahead'
        }
      },
      {
        path: 'ng-buttons',
        component: NgButtonsComponent,
        data: {
          title: 'Ngb-Bootstrap'
        }
      },  
      {
        path: 'tags',
        component: TagsInputComponent,
        data: {
          title: 'Tags'
        }
      }, 
      {
        path: 'switch',
        component: SwitchComponent,
        data: {
          title: 'Switch'
        }
      }, 
      {
        path: 'select',
        component: SelectComponent,
        data: {
          title: 'Select'
        }
      },    
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIComponentsRoutingModule { }