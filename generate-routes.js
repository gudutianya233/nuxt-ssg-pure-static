import fs from 'fs';
import axios from 'axios';

axios.all([
  axios.get('http://localhost:5000/hospital/getAboutHospitalAll'),
  axios.get('http://localhost:5000/hospital/getHospitalDynamicsAll'),
  axios.get('http://localhost:5000/hospital/getHealthPopularizationAll'),
  axios.get('http://localhost:5000/hospital/getMediaCoverageAll'),
  axios.get('http://localhost:5000/hospital/getWelfareActivitiesAll'),
  axios.get('http://localhost:5000/doctor/getDoctorAll')
]).then(axios.spread((aboutHospitalRes, hospitalDynamicsRes, healthPopularizationRes,mediaCoverageRes,welfareActivitiesRes,doctorRes) => {
  const aboutHospitalRoutes = aboutHospitalRes.data.data.map((article) => `/article/about_hospital/${article.id}`);
  const hospitalDynamicsRoutes = hospitalDynamicsRes.data.data.map((article) => `/article/hospital_dynamics/${article.id}`);
  const healthPopularizationRoutes = healthPopularizationRes.data.data.map((article) => `/article/health_popularization/${article.id}`);
  const mediaCoverageRoutes = mediaCoverageRes.data.data.map((article) => `/article/media_coverage_detail/${article.id}`);
  const welfareActivitiesRoutes = welfareActivitiesRes.data.data.map((article) => `/article/welfare_activities_detail/${article.id}`);
  const doctorResRoutes = doctorRes.data.data.map((article) => `/article/doctor_detail/${article.id}`);
  const routes = [...aboutHospitalRoutes, ...hospitalDynamicsRoutes, ...healthPopularizationRoutes,...mediaCoverageRoutes, ...welfareActivitiesRoutes, ...doctorResRoutes];
  fs.writeFileSync('routes.json', JSON.stringify(routes));
}));
