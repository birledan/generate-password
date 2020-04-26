import api from '../utils/api';

const proxy = ({ data }) => data?.results[0]?.login?.sha1;

const generate = payload => api.get("/api/", payload).then(proxy);

export default {
  generate,
}
