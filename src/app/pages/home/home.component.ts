import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddShopDialogComponent } from '../../shared/add-shop-dialog/add-shop-dialog.component';
import { ShopService } from '../../services/shop.service';
import { LoginService } from '../../services/login.service';
import { ShopDao } from '../../models/daos/ShopDao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shops: ShopDao[];

  constructor(public dialog: MatDialog, private shopService: ShopService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getShops();
  }

  openDialogBox(): void{
    const dialogRef = this.dialog.open(AddShopDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.shopService.addShop(this.loginService.getCurrentUser().getId(), result).subscribe();
      this.getShops();
    });
  }

  getShops(): void{
    this.shopService.getShops(this.loginService.getCurrentUser().getId()).subscribe(data =>{
      this.shops = data;
    });
  }

}
