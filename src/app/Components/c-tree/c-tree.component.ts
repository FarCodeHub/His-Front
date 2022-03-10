import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-tree',
  templateUrl: './c-tree.component.html',
  styleUrls: ['./c-tree.component.scss']
})
export class CTreeComponent implements OnInit {


  @Input()
  data: any[];

  @Input()
  childrenFieldName: string;

  @Input()
  fieldName: string;

  @Input()
  searchFieldTitle: string;

  @Input()
  extraOptions: boolean = true;

  @Output()
  selectedNodeChange = new EventEmitter<any>();

  @Input()
  selectedNode: any;

  constructor() { }

  ngOnInit(): void {
  }

  expandNode(node: any) {
    this.selectedNode = node;
    this.selectedNodeChange.emit(node);
    if (node.expanded == undefined)
      node.expanded = true;
    else
      node.expanded = !node.expanded;
  }

}
