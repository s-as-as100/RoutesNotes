// // if u can pass additional props in the component instead of compoonent attribute you should use render 
// // attributrs
// // <Route path ="/HomePage" render= {() => <Product (newProps) sortBy="new"/>} />
// if i pass the new props Histpry , math, path props removes 
// now we can solve this problem by props inside arrow funciton
// <Route path ="/HomePage" render= {(Props) => <Product  sortBy="new" {...props}/>} />
