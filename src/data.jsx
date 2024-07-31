export const API_KEY = 'AIzaSyD9rGe2RGEV5l3GfA8nYSv9xEnUjbdg79k';

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}