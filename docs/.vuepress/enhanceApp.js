
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');

// 引入柱状图
require('echarts/lib/chart/bar');

require("echarts/lib/chart/line");
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

const generateData=(func)=>{
    const data = [];
    for (let i = -1; i <= 60; i += 0.1) {
        data.push([i, func(i)]);
    }
    return data;
}

const getChart=({element,label,yAxis,title,func})=>{

    const chart = echarts.init(element);

        chart.setOption({
            title: {
                text: title
            },
            tooltip: {
                formatter: function() {
                    return label;
                }
            },
            xAxis: {
                min: 0,
                max: 60,
                type: 'value',
                axisLine: {onZero: true}
            },
            yAxis: {
                min: 0,
                max: 60,
                type: 'value',
                axisLine: {onZero: true},
                ...yAxis
            },
            series: [
                {
                    type: 'line',
                    data: generateData(func)
                }
            ]
        });
}
export default ({
  Vue,
  options,
  router
}) => {
    Object.assign(Vue.prototype, {$getChart:getChart});
}
