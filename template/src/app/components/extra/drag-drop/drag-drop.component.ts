import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';


let personId = 0;

class Person {
  id: number;
  constructor(public name: string) {
    this.id = personId++;
  }
}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropComponent {


  //click

  public clicked = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false
  };

  public onclick(key: any) {
    this.clicked[key] = true;
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }

  public groups:Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'}, {name: 'Item B'}, {name: 'Item C'}, {name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}]
    }
  ];

  left = [
    new Person('Steven'),
    new Person('Paula'),
    new Person('Persephone'),
    new Person('Jacob'),
  ];
  right = [
    new Person('Delia'),
    new Person('Jackson'),
  ];

  MANY_ITEMS = 'MANY_ITEMS';
  public many = ['The', 'possibilities', 'are', 'endless!'];
  public many2 = ['Explore', 'them'];

  BAG = "DRAGULA_EVENTS";
  subs = new Subscription();
  subsNgFor = new Subscription();
  public constructor(private dragulaService: DragulaService) {

    //ngFor

    this.subsNgFor.add(dragulaService.dropModel(this.MANY_ITEMS)
    .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
      console.log('dropModel:');
      console.log(el);
      console.log(source);
      console.log(target);
      console.log(sourceModel);
      console.log(targetModel);
      console.log(item);
    })
  );
  this.subsNgFor.add(dragulaService.removeModel(this.MANY_ITEMS)
    .subscribe(({ el, source, item, sourceModel }) => {
      console.log('removeModel:');
      console.log(el);
      console.log(source);
      console.log(sourceModel);
      console.log(item);
    })
  );

    //spill

    dragulaService.createGroup("SPILL", {
      removeOnSpill: true
    });

    //revert

    dragulaService.createGroup("REVERT", {
      revertOnSpill: true
    });

    //copy

    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });

    //copy model

    dragulaService.createGroup('PERSON', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (person: Person) => {
        return new Person(person.name);
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });

    //handle

    dragulaService.createGroup("HANDLES", {
      moves: (el, container, handle) => {
        return handle.className === 'handle';
      }
    });

    //Nested

    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === "group-handle"
    });

    

    //event

    this.subs.add(dragulaService.drag(this.BAG)
      .subscribe(({ el }) => {
        this.removeClass(el, 'ex-moved');
      })
    );
    this.subs.add(dragulaService.drop(this.BAG)
      .subscribe(({ el }) => {
        this.addClass(el, 'ex-moved');
      })
    );
    this.subs.add(dragulaService.over(this.BAG)
      .subscribe(({ el, container }) => {
        this.addClass(container, 'ex-over');
      })
    );
    this.subs.add(dragulaService.out(this.BAG)
      .subscribe(({ el, container }) => {
        this.removeClass(container, 'ex-over');
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.subsNgFor.unsubscribe();
  }

  private hasClass(el: Element, name: string):any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: Element, name: string):void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: Element, name: string):void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

}
