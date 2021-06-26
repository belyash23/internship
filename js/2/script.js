import chartData from './chartData.js';

$.ajax('index.php', {
    method: 'get',
    dataType: 'xml',
    data: {
        url: 'https://www.cbr.ru/scripts/XML_val.asp',
        params: {
            d: 0
        }
    }
}).done(response => {
    const currencyName = $('.choose-currency__name');
    const option = $('<option value="">Российский рубль</option>');
    currencyName.append(option);
    $(response).find('Item').each(function () {
        const id = $(this).attr('ID');
        const name = $(this).find('Name').html();
        const option = $(`<option value="${id}">${name}</option>`);
        $('.choose-currency__name').append(option);
    });

    currencyName.on('change', function (e) {
        e.preventDefault();
        const currencyName = $(e.target);
        const id = currencyName.val();
        const parent = $(this).parent('.choose-currency__form');
        const currencyIndex = $('.choose-currency__form').index(parent);
        const currencyType = $(this).data('currencyType');
        chartData.currencies[currencyIndex].name = currencyName.children(':selected').text();
        chartData.updateCurrency(id, currencyIndex, currencyType);
    });

    const chartOptions = {
        chart: {
            renderTo: 'chart',
            type: 'line',
            events: {
                drilldown: function(e) {
                    if(e.seriesOptions) {
                        const id = e.seriesOptions.month;
                        this.xAxis[0].categories = chartData.dates.monthDates[id]
                    }
                },
                drillup: function() {
                    this.xAxis[0].categories = chartData.dates.drilldownDates;
                }
            }
        },
        lang: {
            drillUpText: '◁ Назад'
        },
        title: {
            text: chartData.title
        },
        tooltip: {
        },
        xAxis: [{
            categories: chartData.dates.drilldownDates
        }],
        yAxis: [{
            title: {
                text: chartData.currencies[0].name
            }
        }, {
            title: {
                text: chartData.currencies[1].name
            },
            opposite: true
        }],
        series: [{
            yAxis: 0,
            name: 'ещё какая-то валюта',
            data: chartData.currencies[0].data,
        }, {
            yAxis: 1,
            name: chartData.currencies[1].name,
            data: chartData.currencies[1].data,
            }
        ],
        drilldown: {
            drillUpButton: {
                position: {
                    x: 8,
                    y: -40
                }
            },
            xAxis: 0,
            series: chartData.drilldownSeries
        }
    }
    chartData.chart = new Highcharts.Chart(chartOptions);

    const selected = currencyName
        .children()
        .eq(1)
        .attr('selected', 'true')
    const id = selected.attr('value');

    chartData.currencies[0].name = selected.text();
    chartData.defaultIds = [{
        dividend: id,
        divisor: null
    }, {
        dividend: null,
        divisor: null
    }];

    const dateEnd = new Date();
    const lastYear = dateEnd.getFullYear() - 1;
    const dateStart = new Date();
    dateStart.setFullYear(lastYear);
    chartData.updateDates(dateStart, dateEnd);

    $('.change-year').on('click', e => {
        const to = $(e.target).data('to');
        chartData.changeYear(to);
    });
});