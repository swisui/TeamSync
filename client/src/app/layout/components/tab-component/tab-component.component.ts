import { Component } from "@angular/core";

@Component({
    selector: "tab-component",
    templateUrl: "./tab-component.component.html",
    styleUrls: ["./tab-component.component.scss"]
})
export class TabComponentComponent {
    activeIndex: number;
    scrollableTabs: Array<{ title: string; content: string }>;

    constructor() {
        this.activeIndex = 1;
        this.scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: `Title ${i}`, content: `Content ${i}` }));
    }
}
