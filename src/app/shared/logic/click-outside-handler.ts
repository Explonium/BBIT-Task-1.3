import { Component, HostListener } from "@angular/core";

@Component({
    template: ''
  })
export class ClickOutsideHandler {

    private isFocusInsideComponent = false;
    private isComponentClicked = false;

    @HostListener('click')
    clickInside() {
        this.isFocusInsideComponent = true;
        this.isComponentClicked = true;
    }

    @HostListener('document:click')
    clickout() {
        if (!this.isFocusInsideComponent && this.isComponentClicked) {
            this.onClickOutside();
            this.isComponentClicked = false;
        }
        else {

        }
        this.isFocusInsideComponent = false;
    }

    onClickOutside(){

    }
}
