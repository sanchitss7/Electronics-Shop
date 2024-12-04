import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {

  customers =[
    {
      "id": 1,
      "name": "Rahul Sharma",
      "email": "rahul.sharma@example.com",
      "mobile": "+91-9876543210",
      "pancard": "ABCDE1234F",
      "adharcard": "1234-5678-9012"
    },
    {
      "id": 2,
      "name": "Priya Verma",
      "email": "priya.verma@example.com",
      "mobile": "+91-9123456789",
      "pancard": "FGHIJ5678K",
      "adharcard": "2345-6789-0123"
    },
    {
      "id": 3,
      "name": "Amit Kumar",
      "email": "amit.kumar@example.com",
      "mobile": "+91-9988776655",
      "pancard": "KLMNO1234P",
      "adharcard": "3456-7890-1234"
    },
    {
      "id": 4,
      "name": "Sneha Patel",
      "email": "sneha.patel@example.com",
      "mobile": "+91-9871234567",
      "pancard": "QRSTU6789L",
      "adharcard": "4567-8901-2345"
    },
    {
      "id": 5,
      "name": "Vikram Singh",
      "email": "vikram.singh@example.com",
      "mobile": "+91-8765432109",
      "pancard": "VWXYZ3456M",
      "adharcard": "5678-9012-3456"
    },
    {
      "id": 6,
      "name": "Ritika Das",
      "email": "ritika.das@example.com",
      "mobile": "+91-9012345678",
      "pancard": "ABCDE2345N",
      "adharcard": "6789-0123-4567"
    },
    {
      "id": 7,
      "name": "Karan Mehta",
      "email": "karan.mehta@example.com",
      "mobile": "+91-9123456701",
      "pancard": "FGHIJ5678O",
      "adharcard": "7890-1234-5678"
    },
    {
      "id": 8,
      "name": "Pooja Iyer",
      "email": "pooja.iyer@example.com",
      "mobile": "+91-9988771122",
      "pancard": "KLMNO6789P",
      "adharcard": "8901-2345-6789"
    },
    {
      "id": 9,
      "name": "Arjun Desai",
      "email": "arjun.desai@example.com",
      "mobile": "+91-9876501234",
      "pancard": "QRSTU3456Q",
      "adharcard": "9012-3456-7890"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
