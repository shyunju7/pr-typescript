import { useLocation, useParams } from "react-router-dom";

const ChapterDetails = () => {
  const location = useLocation();
  const param = useParams();
  console.log(location, param);
  return <div>{param.chapterId}</div>;
};

export default ChapterDetails;
