import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const param = useParams();
  console.log(location, param.id);
  return <div>details pages</div>;
};

export default Details;
