import axios from "axios";
import _ from "lodash";


const mergeParams = params => _.merge(
  params
);

export default params => axios(mergeParams(params)).catch(e => {
  const status = _.get(e, "response.status");
  throw e
});
