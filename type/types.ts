 
  export interface TravelItem {
    id: number;
    location: string;
    category: string;
    country: string;
    continent: string;
    description: string;
    sights: string[];
    rating: number;
    best_time_to_visit: string;
    expense_level: string;
    time_zone: string;
    image: string;
    reviews: Review[];
    currency: string;
    languages: string[];
    additional_info: string;
  }
  
  

export interface Review {
    id: number;
    name: string;
    description: string;
    rating: number;
  }