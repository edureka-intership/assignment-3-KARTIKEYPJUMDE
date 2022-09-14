//Class 
class restaurentManager{
    //property
    //restaurent_List_Array :
    restaurantList = [{
        id: 1,restaurent_Name : "hotel_Delight",restaurent_Address : "601,East_of_Delhi", restaurent_City : "Delhi",
    },
    {
        id: 2,restaurent_Name : "hotel_Conrad",restaurent_Address : "602,West of Pune", restaurent_City : "Pune",
    },
    {
        id: 3,restaurent_Name : "hotel_Taj",restaurent_Address : "603,North_of_Mumbai", restaurent_City  : "Mumbai",

    },
    {
        id: 4,restaurent_Name : "hotel_Eden_Pavilion",restaurent_Address : "604,South_of_Kolkata", restaurent_City : "Kolkata",
    },
    {
        id: 5,restaurent_Name : "hotel_Mosaic",restaurent_Address : "605,somewhere_in_Kerela", restaurent_City : "Kerela",
    }]
    //Function
    print_All_Restaurent_Names(){
      return this.restaurantList.forEach(
        function (restro){
          console.log(restro.restaurent_Name);
      });
    }
//Function
    filter_Restaurent_By_City=(restaurent_City)=>{
     console.log(this.restaurantList.filter(list => list.restaurent_City == restaurent_City));
    }
    
    }

let restaurent_list_Onconsole = new restaurentManager(); 
//1.a print_All_Restaurent_Names
restaurent_list_Onconsole.print_All_Restaurent_Names();

//1.b print_All_Restaurent_Names
restaurent_list_Onconsole.filter_Restaurent_By_City("Kolkata");



