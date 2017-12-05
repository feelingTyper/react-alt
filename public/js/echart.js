option = {
    title: {
        text: '系统调用序列预测',
        subtext: '粗略模型'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['', '']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {
                readOnly: false
            },
            magicType: {
                type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45
        ]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [{
        name: '预测序列',
        type: 'line',
        data: [208,
            11,
            33,
            192,
            191,
            174,
            199,
            5,
            54,
            5,
            195,
            195,
            195,
            3,
            3,
            3,
            195,
            5,
            3,
            6,
            195,
            140,
            140,
            3,
            45,
            3,
            6,
            195,
            195,
            195,
            3,
            195,
            45,
            3,
            3,
            6,
            195,
            5,
            195,
            3,
            140,
            140,
            3,
            3,
            3
        ],
        // markPoint: {
        //     data: [{
        //         type: 'max',
        //         name: '最大值'
        //     }, {
        //         type: 'min',
        //         name: '最小值'
        //     }]
        // },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '测试序列',
        type: 'line',
        data: [208, 11, 33, 192, 191, 174, 199, 5, 54, 5, 195, 195, 195, 3, 3, 3, 195, 5,
            3, 6, 195, 140, 140, 3, 45, 3, 3, 3, 45, 3, 3, 3, 195, 195, 140, 3, 195, 3, 3, 3,
            3, 45, 3, 3, 3, 45, 3, 3, 3, 3, 3, 3, 175, 5, 54, 140, 197, 221, 42, 42, 120
        ],
        // markPoint: {
        //     data: [{
        //         name: '最低',
        //         value: -2,
        //         xAxis: 1,
        //         yAxis: -1.5
        //     }]
        // },
        markLine: {
            data: [{
                    type: 'average',
                    name: '平均值'
                },
                [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                }, {
                    symbol: 'circle',
                    label: {
                        normal: {
                            position: 'start',
                            formatter: '最大值'
                        }
                    },
                    type: 'max',
                    name: '最高点'
                }]
            ]
        }
    }]
};