export interface ConditionType {
  text: string
  icon: string
  code: number
}
export interface CurrentType {
  cloud: number
  condition: ConditionType
  feelslike_c: number
  feelslike_f: number
  gust_kph: number
  gust_mph: number
  humidity: number
  is_day: number
  last_updated: string
  last_updated_epoch: number
  precip_in: number
  precip_mm: number
  pressure_in: number
  pressure_mb: number
  temp_c: number
  temp_f: number
  uv: number
  vis_km: number
  vis_miles: number
  wind_degree: number
  wind_dir: string
  wind_kph: number
  wind_mph: number
}
export interface LocationType {
  country: string
  lat: number
  localtime: string
  localtime_epoch: number
  lon: number
  name: string
  region: string
  tz_id: string
}
export interface WeatherType {
  current?: CurrentType
  location?: LocationType
}
