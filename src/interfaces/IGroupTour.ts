import { MouseEventHandler } from "react";

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
    trip_images: Array<{
      trip_image_code: string;
      trip_image_id: number;
      trip_image_name: string;
      trip_image_url: string;
    }>;
  }>;
  isGroupToursLoading: boolean;
  groupToursSucess: any;
  groupToursErrors: any;

  groupTour: {
    trip_id?: number;
    title?: string;
    country_id?: number;
    accomodation?: string;
    transportation?: string;
    eat?: string;
    day?: number;
    night?: number;
    price?: number;
    quota?: number;
    max_quota?: number;
    description?: string;
    trip_image_code?: string;
    date_trip?: string;
    country_name?: string;
    trip_images?:
      | Array<{
          trip_image_id?: number;
          trip_image_code?: string;
          trip_image_name?: string;
          trip_image_url?: string;
        }>
      | any;
  };
  isGroupTourLoading: boolean;
  groupTourSucess: any;
  groupTourErrors: any;
}

export interface ITourTitle {
  isLoading?: boolean;
  title?: string;
  country?: string;
}

export interface ITourImages {
  isLoading?: boolean;
  tripImages?:
    | Array<{
        trip_image_id?: number;
        trip_image_code?: string;
        trip_image_name?: string;
        trip_image_url?: string;
      }>
    | any;
}

export interface ITripImages {
  trip_image_id?: number;
  trip_image_code?: string;
  trip_image_name?: string;
  trip_image_url?: string;
}

export interface ITourCalculation {
  isLoading?: boolean;
  price?: number;
  count: number;
  total: number;
  onAdd: MouseEventHandler<HTMLSpanElement>;
  onSubtract: MouseEventHandler<HTMLSpanElement>;
  onBook: MouseEventHandler<HTMLButtonElement>;
}

export interface ITourInformationTrip {
  isLoading?: boolean;
  accomodation?: string;
  transportation?: string;
  eat?: string;
  day?: number;
  night?: number;
  dateTrip?: string;
}

export interface ITourDescription {
  isLoading?: boolean;
  description?: string;
}
