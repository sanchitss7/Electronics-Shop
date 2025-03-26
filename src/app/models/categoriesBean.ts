export class CategoriesBean {
    Id: number | undefined; 
    CategoryName: string | undefined; 
    Description: string | undefined;
    Level: number | undefined;
    parentLevel: number | undefined; 
    CreatedBy: string | undefined;
}

export class InventoriesBean {
    Id: number | undefined; 
    CategoryId: number | undefined; 
    categoryName: string | undefined; 
    description: string | undefined;
    productName: number | undefined;
    price: number | undefined; 
    quantity: number | undefined; 
    sku: number | undefined; 
    CreatedBy: string | undefined;
}

export class UserDetails {
    Id: number | undefined; 
    Name : string | undefined;
    Email : string | undefined;
    AlternateEmail : string | undefined;
    Mobile : string | undefined;
    AlternateMobile : string | undefined;
    P_Address : string | undefined;
    C_Address : string | undefined;
    CreatedBy : string | undefined;
    PAN : string | undefined;
}

export class userDoc {
    Id: number | undefined;
    DocId : number | undefined;
    DocPath : string | undefined;
    CreatedBy : string | undefined;
}