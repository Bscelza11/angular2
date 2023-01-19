
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdComponent } from '../ad.component';
import { adDirective } from '../ad.directive';
import { cardItem } from '../cardItem.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  @Input() adItem: any;

  @ViewChild( adDirective, {static: true}) adHost!: adDirective;

  constructor(){
    
  }
 

  ngOnInit(): void {

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(this.adItem.component);
    componentRef.instance.data = this.adItem.data;

    console.log(this.adItem.data)
    
  }




 


}
