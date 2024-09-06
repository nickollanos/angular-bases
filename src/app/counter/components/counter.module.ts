import { NgModule } from "@angular/core";
import { counterComponent } from './counter/counter.components';


@NgModule({
  declarations: [
    counterComponent
  ],
  exports: [
    counterComponent
  ]
})
export class CounterModule {}
