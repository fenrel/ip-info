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
  code?: string,
  messages?: string,
  ip: string,
  location: Location,
  isp: string
}

export default async function getInfo(api_endpoint: string) {
  const res = await fetch(`/api/search?ip=${api_endpoint}`);
  const data = await res.json();
  if ('code' in data) {
    throw new Error(data.messages);
  }
  return data;
}