import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { RippleModule } from "primeng/ripple";
import { TabViewModule } from "primeng/tabview";

import { TabComponentRoutingModule } from "./tab-component-routing.module";
import { TabComponentComponent } from "./tab-component.component";

@NgModule({
    declarations: [TabComponentComponent],
    imports: [CommonModule, TabComponentRoutingModule, ButtonModule, CardModule, RippleModule, TabViewModule]
})
export class TabComponentModule {
}
