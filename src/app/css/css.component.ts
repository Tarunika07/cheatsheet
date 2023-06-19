import { Component,OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit{

  @ViewChild('colorpreview') colorpreview!: ElementRef;
  @ViewChild('textpreview') textpreview!: ElementRef;
  @ViewChild('fontpreview') fontpreview!: ElementRef;
  @ViewChild('linepreview') linepreview!: ElementRef;
  @ViewChild('radiuspreview') radiuspreview!: ElementRef;
  @ViewChild('marginpreview') marginpreview!: ElementRef;
  @ViewChild('paddingpreview') paddingpreview!: ElementRef;
  @ViewChild('borderpreview') borderpreview!: ElementRef;
  @ViewChild('transformpreview') transformpreview!: ElementRef;

  ngOnInit(): void {
    setTimeout(()=>{
      this.color('#5E6CA5');
      this.text('left','');
      this.font('small','');
      this.line('normal','normal');
      this.radius('5%');
      this.margin('0px');
      this.padding('0');
      this.border('solid');
      this.transform('translateX(0)','TranslateX');
    },1000);
  }

  constructor( ){  }

  color(option:string) { 
    const iframe = this.colorpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><head><style>
  .container{width:70px;height:70px;background-color:${option};border-radius:10%;margin-left:55px;margin-top:10px;}
      h3{text-align:center;margin-top:20px;color: #5E6CA5;}</style></head>
      <body><h3>${option}</h3><div class='container'></div></body></html> `
      );
    document.close();
  }

  text(option:string,option2:string) { 
    const iframe = this.textpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  `<html><head><style>
#one{text-align:${option};font-family: sans-serif; font-size:small;}
#two{text-transform:${option2};font-family: sans-serif; font-size:small;}
  </style></head><body>
  <p id='one'>The <b>text-align</b> property specifies the horizontal alignment of text. </p> <p id='two'>The <b>text-transform</b> property controls the capitalization of text.</p>
  </body></html> `
   );
    document.close();
  }

  font(option:string,option2:string) { 
    const iframe = this.fontpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  `<html><head><style>
#one{font-size:${option};font-family: sans-serif; }
#two{font-weight:${option2};font-family: sans-serif; font-size:small;}
  </style></head><body>
  <p id='one'>The <b>font-size</b> property sets the size of a font.</p> <p id='two'>The <b>font-weight</b> property sets how thick or thin characters in text should be displayed. </p>
  </body></html> `
   );
    document.close();
  }

  line(option:string,option2:string) { 
    const iframe = this.linepreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  `<html><head><style>
#one{line-height:${option};font-family: sans-serif; font-size:small;}
#two{letter-spacing:${option2};font-family: sans-serif; font-size:small;}
  </style></head><body>
  <p id='one'>The <b>line-height</b> property specifies the height of a line.</p> <p id='two'>The <b>letter-spacing</b> property alters the space between characters in a text.</p>
  </body></html> `
   );
    document.close();
  }

  radius(option:string) { 
    const iframe = this.radiuspreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><head><style>
  .container{width:70px;height:70px;background-color: #5E6CA5;border-radius:${option};margin-left:55px;margin-top:10px;}
      h3{text-align:center;margin-top:20px;color: #5E6CA5;}</style></head>
      <body><h3>border-radius:${option};</h3><div class='container'></div></body></html> `
      );
    document.close();
  }

  margin(option:string) { 
    const iframe = this.marginpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><head><style>
  .container{width:70px;height:70px;background-color: #5E6CA5;margin:${option};}
      h3{text-align:center;margin-top:20px;color: #5E6CA5;}</style></head>
      <body><h3>margin:${option};</h3><div class='container'></div></body></html> `
      );
    document.close();
  }

  padding(option:string) { 
    const iframe = this.paddingpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><head><style>
  .container{width:70px;height:62px;margin-left:55px;text-align:center;background-color: #5E6CA5;color:#ECF6FB;padding:${option};font-family: sans-serif; font-size:small;}
      h3{text-align:center;margin-top:20px;color: #5E6CA5;}</style></head>
      <body><h3>padding:${option};</h3><div class='container'> Padding is used to create space</div></body></html> `
      );
    document.close();
  }

  border(option:string) { 
    const iframe = this.borderpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><head><style>
  .container{width:70px;height:63px;font-family: sans-serif; font-size:small;margin-left:55px;text-align:center;border-style: ${option};border-color:#5E6CA5;;}
      h3{text-align:center;margin-top:20px;color: #5E6CA5;}</style></head>
      <body><h3>padding:${option};</h3><div class='container'>It sets the style of an element's borders.</div></body></html> `
      );
    document.close();
  }

  transform(option:string,name:string) { 
    const iframe = this.transformpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><head><style>
  .container{width:40px;height:40px;background-color: #5E6CA5;margin-left:70px;text-align:center;transform:${option}}
      h3{text-align:center;margin-top:20px;color: #5E6CA5;}</style></head>
      <body><h3>${name}:<br>${option};</h3><div class='container'></div></body></html> `
      );
    document.close();
  }

}
