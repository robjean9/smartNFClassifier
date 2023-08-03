import { Component, ViewChild } from '@angular/core';
import {
  NgxScannerQrcodeComponent,
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
} from 'ngx-scanner-qrcode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  title = 'SmartNFClassifier';
  showCamera = false;
  config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        facingMode: 'environment',
      },
    },
  };

  openCamera() {
    this.showCamera = true;
    setTimeout(() => {
      //@ts-ignore
      document.querySelector('.ngx-scanner-qrcode').style.display = 'flex';
      this.action.start();
    }, 100);
  }

  readQR(event: ScannerQRCodeResult[], action?: any) {
    console.log(event[0].value);
    alert("Nota escaneada!")
    this.action.stop();
    //@ts-ignore
    document.querySelector('.ngx-scanner-qrcode').style.display = 'none';
  }
}
