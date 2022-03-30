export interface BussesResult {
  success: boolean;
  data?: DataEntity[] | null;
}

export interface DataEntity {
  vid: string;
  state_dtime: string;
  line_name: string;
  line_direction: string;
  destination_name?: string | null;
  last_stop_number?: string | null;
  last_stop_name?: string | null;
  current_stop_number: string;
  current_stop_name: string;
  current_stop_scheduled_departure: string;
  gps_latitude: number;
  gps_longitude: number;
  time_difference?: string | null;
  connection_no: number;
  door: boolean;
  gps_course: number;
}
