import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.less']
})
export class CustomerdetailsComponent implements OnInit {
  docids = [
    {
      'id': 1,
      'name': 'pancard',
      'value': 'Pan Card'
    },
    {
      'id': 2,
      'name': 'adharcard',
      'value': 'Aadhar Card'
    },
    {
      'id': 3,
      'name': 'driving',
      'value': 'Driving License'
    },
    {
      'id': 4,
      'name': 'voterid',
      'value': 'Voter ID'
    },
    {
      'id': 5,
      'name': 'pancard',
      'value': 'Pan Card'
    },
  ];
  imageSrc = [
    {
      'id': 1,
      'name': 'panF',
      'number': '2342234',
      'src': '../../../assets/images/panF.jpg',
      'value': 'Pan Card Front'
    },
    {
      'id': 2,
      'name': 'panB',
      'number': '5335345',
      'src': '../../../assets/images/panB.jpg',
      'value': 'Pan Card Back'
    }
    
  ]

  confimModal() {
    const delmodal = document.getElementById('confimationPopup');
    delmodal?.classList.add('show');
    delmodal?.setAttribute('style', 'display: block;');
  }
  showModal() {
    const modal = document.getElementById('NewTransaction');
    modal?.classList.add('show');
    modal?.setAttribute('style', 'display: block;');
  }

  closeModal() {
    const modal = document.getElementById('NewTransaction');
    const delmodal = document.getElementById('confimationPopup');
    
  modal?.classList.remove('show');
  modal?.setAttribute('style', 'display: none;');
  delmodal?.classList.remove('flow');
  delmodal?.setAttribute('style', 'display: none;');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
