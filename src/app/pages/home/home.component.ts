import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddShopDialogComponent } from '../../shared/add-shop-dialog/add-shop-dialog.component';
import { ShopService } from '../../services/shop.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private shopService: ShopService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  openDialogBox(): void{
    const dialogRef = this.dialog.open(AddShopDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.shopService.addShop(this.loginService.getCurrentUser().getId(), result).subscribe();
    });

  }

}
