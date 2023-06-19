import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit{

  @ViewChild('headerpreview') headerpreview!: ElementRef;
  @ViewChild ('breakpreview') breakpreview!: ElementRef;
  @ViewChild ('listpreview') listpreview!: ElementRef;
  @ViewChild ('textpreview') textpreview!: ElementRef;
  @ViewChild ('tablepreview') tablepreview!: ElementRef;
  @ViewChild ('blockpreview') blockpreview!: ElementRef;
  @ViewChild ('colpreview') colpreview!: ElementRef;
  @ViewChild ('entpreview') entpreview!: ElementRef;
  @ViewChild ('emojipreview') emojipreview!: ElementRef;

   ngOnInit(): void {
     setTimeout(()=>{
      this.header('h3');
      this.list('ol');
      this.break('');
      this.text('i');
      this.table('td');
      this.block('');
      this.col('');
      this.ent('','','');
      this.emoji('');
      },500);    
   }

  constructor(){  }

    header(option:string) { 
     const iframe = this.headerpreview.nativeElement;
     const document = iframe.contentDocument || iframe.contentWindow.document;
     document.open();
     document.write(      
   ` <html><body><${option}>This is an header example<${option}></body></html> `);
     document.close();
   }

   break(option:string) { 
    const iframe = this.breakpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    if(option=='br'){
    document.open();
    document.write(      
  ` <html><body><p>Anyone can cook <br> but only the<br> fearless<br> can be great.<br> -Chef Gusteau</p></body></html> `);
    document.close();
  }else{
    document.open();
    document.write(      
  ` <html><body><p>Anyone can cook but only the fearless can be great. -Chef Gusteau</p></body></html> `);
    document.close();
  }
  }

   list(option:string) { 
     const iframe = this.listpreview.nativeElement;
     const document = iframe.contentDocument || iframe.contentWindow.document;
     document.open();
     document.write(      
   ` <html><body><${option}><li>Coquelicot</li><li>Ruby</li><li>Auburn</li><li>Viridian</li><li>Indicolite</li><li>Turquoise</li><li>Yinmn</li><${option}></body></html> `);
     document.close();
   }

   text(option:string) { 
    const iframe = this.textpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><body><p>Platform No.: 9<sup>3/4</sup><br><${option}>King's Cross Station,</${option}><br>London.</p> <span><b>9</b></span><${option}>3/4<${option}> </body></html> `);
    document.close();
  }

  table(option:string) { 
    const iframe = this.tablepreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><head><style>table,th,td{border: 1px solid black;border-collapse:collapse;padding:2px 5px;}</style></head><body><table><tr><${option}>Name</${option}><${option}>Type</${option}><${option}>Distance</${option}></tr>
  <tr><td>cirrus</td}><td>high level</td><td>20,000 ft</td></tr><tr><td>alto<br>stratus</td}><td>mid level</td><td>< 6,500 ft</td></tr><tr><td>nimbo<br>stratus</td}><td>low level</td><td>> 6,500 ft</td></tr></table></body></html> `);
    document.close();
  }

  col(option:string) { 
    const iframe = this.colpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    if(option=='cs'){
      document.open();
      document.write(      
    ` <html><head><style>table, th, td {border: 1px solid black;border-collapse: collapse;}</style></head><body><table style="width:100%"><tr><th colspan="2">Name</th><th>Book</th></tr>
      <tr><td>Kaz</td><td>Brekker</td><td>Six of crows</td></tr><tr><td>Jon</td><td>Snow</td><td>Song of ice <br> and fire</td></tr><tr><td>Percy</td><td>Jakson</td><td>The lightning <br>thief</td></tr></table></body></html>`);
      document.close();
    }
    else if(option=='rs'){
      document.open();
      document.write(      
    ` <html><head><style>table, th, td {border: 1px solid black; border-collapse: collapse;}</style></head><body><table style="width:100%"><tr><th>Author</th><td>Dan Brown</td></tr>
      <tr><th rowspan="5">Books</th><td>Angels and demons</td></tr><tr><td>Inferno</td></tr><tr><td>Deception point</td></tr><tr><td>Da vinci code</td></tr><tr><td>Digital fortress</td></tr></table></body></html>`);
      document.close();      
    }else{
      document.open();
      document.write(      
    ` <html><body><h4>Colspan and Rowspan example <h4></body></html> `);
      document.close();  
    } 
  }

  block(option:string) { 
    const iframe = this.blockpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    if(option=='b'){
      document.open();
      document.write(      
    ` <html><head><style>div,article{background-color:#dcedf7; margin-bottom:3px;}</style></head><body><h4>Block elements<h4><div>This is a div</div><article>This is a article</article></body></html> `);
      document.close();
    }
    else if(option=='i'){
      document.open();
      document.write(      
    ` <html><head><style>code,span{background-color:#dcedf7; margin-bottom:3px;}</style></head><body><h4>Block elements<h4><code>This is a code</code><span>This is a span</span></body></html> `);
      document.close();      
    }else{
      document.open();
      document.write(      
    ` <html><body><h4>Block and Inline elements example <h4></body></html> `);
      document.close();  
    }  
  }

  ent(option:string,name:string,char:string) { 
    const iframe = this.entpreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    document.open();
    document.write(      
  ` <html><body><p>This is ${name} : ${option}</p><p>Denoted by:${char} <br> <b>NOTE:</b> The characters must start with & and end with ;</p> </body></html> `);
    document.close();
  }

  emoji(option:any) { 
    const iframe = this.emojipreview.nativeElement;
    const document = iframe.contentDocument || iframe.contentWindow.document;
    if(option=='1'){
      document.open();
      document.write(      
    ` <html> <head><meta charset="UTF-8"></head><body><p style="font-size:37px">&#128512;</p><p>Denoted by: #128512</p></body></html> `);
      document.close();
    }else if(option=='2'){
      document.open();
      document.write(      
    ` <html><head><meta charset="UTF-8"></head><body>  <p style="font-size:37px"> &#128557;</p><p>Denoted by: #128557</p></body></html> `);
      document.close();
    }else if(option=='3'){
      document.open();
      document.write(      
    ` <html><head><meta charset="UTF-8"></head><body><p style="font-size:37px">  &#128564; </p><p>Denoted by: #128564</p></body></html> `);
      document.close();
    }else{
      document.open();
      document.write(      
    ` <html><body><p>Click on the options! </p></body></html> `);
      document.close();
    }        
  }
 

}
