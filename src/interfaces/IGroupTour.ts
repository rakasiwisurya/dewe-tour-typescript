export interface IGroupTour {
  groupTours: Array<{
    accomodation: string;
    country_id: number;
    country_name: string;
    date_trip: string;
    day: number;
    description: string;
    eat: string;
    max_quota: number;
    night: number;
    price: number;
    quota: number;
    title: string;
    transportation: string;
    trip_id: number;
    trip_image_code: string;
    trip_images: {
      [index: number]: {
        trip_image_code: string;
        trip_image_id: number;
        trip_image_name: string;
        trip_image_url: string;
      };
    };
  }>;
  isGroupToursLoading: boolean;
  groupToursErrors: string | null | object | any;
}
