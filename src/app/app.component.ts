import { Component, AfterViewInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'child-parrent';
  @ViewChild('uploadedFile', { static: false }) upload: any;

  ngAfterViewInit(): void {
    console.log(this.upload);
  }

  close($event) {
    console.log(this.upload, $event);
  }

  Upload() {
    console.log(this.upload);
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.readFile(file);
    }
  }
  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      console.clear();
      const base64 = btoa(escape(reader.result.toString()));
      console.log('base 64 bit encoded');
      console.log(base64);
      console.log('decoded from base 64');
      const decoded = atob(unescape(base64));
      console.log(decoded);
      
    };
    reader.readAsText(file, 'base64');
  }

}
