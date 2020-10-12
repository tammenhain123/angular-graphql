import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const ORDERS_QUERY = gql`
query{ 
  orders {
  	reference
  	externalReference
  	amount
  	deliveryFee
  	customer{
    	_id
    	name
  	}
  	store
  	items {
    	name
	    amount
  	  quantity
    	note
	  }
	}
}
`;


@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.scss']
})

export class TableOrdersComponent implements OnInit {



  
  constructor() { }

  ngOnInit(): void {
  }

}
