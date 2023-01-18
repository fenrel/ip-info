import { IpLocation } from "../utils/ip.utils";

interface IpInfoProps {
  info: IpLocation
}

export default function IpInfo(props: IpInfoProps) {
  const {info} = props
  return (
    <>
      <ul className="info">
        <li>
          <p className="info-name">IP ADDRESS</p>
          <p className="info-value">{info.ip}</p>
        </li>
        <li>
          <p className="info-name">LOCATION</p>
          <p className="info-value">{info.location.city}, {info.location.region}, {info.location.postalCode}</p>
        </li>
        <li>
          <p className="info-name">TIMEZONE</p>
          <p className="info-value">UTC {info.location.timezone}</p>
        </li>
        <li>
          <p className="info-name">ISP</p>
          <p className="info-value">{info.isp}</p>
        </li>
      </ul>
    </>
  )
}