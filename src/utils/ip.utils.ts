export type Location = {
  country: string,
  region: string,
  city: string,
  lat: number,
  lng: number,
  timezone: string,
  postalCode: string
}

export type IpLocation = {
  ip: string,
  location: Location,
  isp: string
}

export default async function getInfo(api_endpoint: string) {
  try {
    const res = await fetch(`/api/hello?ip=${api_endpoint}`);
    const data = await res.json();
    return data;
  } catch(error) {

  }
}