import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../../../../hooks/useServiceDetails";

const ServicesDetails = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div>
      <h1>details: {service.name}</h1>
      <Link to={`/checkout/${serviceId}`}>
        <button className="bg-primary">Checkout</button>
      </Link>
    </div>
  );
};

export default ServicesDetails;
