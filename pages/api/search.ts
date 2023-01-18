// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IpLocation } from '@/src/utils/ip.utils'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IpLocation>
) {
  const endpoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_SECRET_KEY}&ipAddress=${req.query.ip}`;
  res.send(await fetch(endpoint).then(resp => resp.json()));
}
