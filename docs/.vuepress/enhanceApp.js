
import { autoChart } from '@antv/chart-advisor';

export default ({
  Vue,
  options,
  router
}) => {
    Object.assign(Vue.prototype, {$autoChart:autoChart});
    console.log(Vue)
}
