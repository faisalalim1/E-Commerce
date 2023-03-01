export interface SignUp{
    name: string,
    email: string,
    password: number,
}

export interface login{
    email: string,
    password: number,
}

export interface product{
    name: string,
    price: number,
    color: string,
    category: string,
    description: string,
    URL: string,
    id: number,
    quantity:undefined | number,
    productId:number | number,
}

export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    URL:string,
    description:string,
    id:number| undefined,
    quantity:undefined | number,
    productId:number,
    userId:number
  }

  export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }