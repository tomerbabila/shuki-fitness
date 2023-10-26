import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

interface ContextModel<T> {
  ngLet: T | undefined;
}

@Directive({ selector: '[ngLet]' })
export class NgLetDirective<T> {
  private context: ContextModel<T> = { ngLet: undefined };

  constructor(
    viewContainer: ViewContainerRef,
    templateRef: TemplateRef<ContextModel<T>>
  ) {
    viewContainer.createEmbeddedView(templateRef, this.context);
  }

  @Input() set ngLet(value: T) {
    this.context.ngLet = value;
  }
}
