const chartData = {
    chart: null,
    dateStart: null,
    dateEnd: null,
    defaultIds: null,
    title: "2020-2021",
    dates: {
        values: [],
        drilldownDates: [],
        monthDates: [[], [], [], [], [], [], [], [], [], [], [], [], []]
    },
    currencies: [{
        name: "1231",
        dividend: {
            id: "",
            values: []
        },
        divisor: {
            id: "",
            values: []
        },
        data: [],
        drilldownData: [],
    }, {
        name: "",
        dividend: {
            id: "",
            values: []
        },
        divisor: {
            id: "",
            values: []
        },
        data: [],
        drilldownData: [],
    }],
    drilldownSeries: [],
    months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ],
    updateDates(dateStart, dateEnd) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.title = `${dateStart.getFullYear()} - ${dateEnd.getFullYear()}`;
        this.updateAllCurrencies().then(function () {
            const dates = this.dates;
            dates.drilldownDates.length = 0;
            let currentMonth = null;
            let currentMonthIndex = -1;
            dates.values.forEach(date => {
                const month = date.split('.')[1];
                if (month !== currentMonth) {
                    currentMonth = month;
                    currentMonthIndex++;
                    dates.monthDates[currentMonthIndex] = [];
                    dates.drilldownDates.push(this.months[this.getMonthIndex(date) - 1]);
                }
                dates.monthDates[currentMonthIndex].push(date);
            });
            this.chart.xAxis[0].update();
        }.bind(this));
    },
    updateAllCurrencies() {
        return Promise.all([
            this.updateCurrency(this.getId(0, 'dividend'), 0, 'dividend'),
            this.updateCurrency(this.getId(0, 'divisor'), 0, 'divisor'),
            this.updateCurrency(this.getId(1, 'dividend'), 1, 'dividend'),
            this.updateCurrency(this.getId(1, 'divisor'), 1, 'divisor'),
        ]);
    },
    async updateCurrency(id, currencyIndex, currencyType) {
        const response = await this.getCurrencyData(id);
        const currenciesItem = this.currencies[currencyIndex];
        currenciesItem[currencyType].id = id;
        currenciesItem[currencyType].values = [];
        let dates = [];
        let areRecords = false;
        $(response).find('Record').each(function () {
            areRecords = true;
            dates.push($(this).attr('Date'));
            const value = +$(this).find('Value').html().replace(',', '.');
            currenciesItem[currencyType].values.push(value);
        });
        if (!areRecords) {
            return;
        }
        if (dates.length) {
            this.dates.values = dates;
        }
        this.setCurrencyData(currencyIndex);
        this.updateChart(currencyIndex);
    },
    setCurrencyData(currencyIndex) {
        const currenciesItem = this.currencies[currencyIndex];
        currenciesItem.data = [];
        currenciesItem.drilldownData.length = 0;
        let currentMonth = this.dates.values[0].split('.')[1];
        let currentMonthIndex = 0
        let amount = 0;
        let sum = 0;
        this.addDrilldownItem(currentMonthIndex, currencyIndex);
        this.dates.values.forEach((date, index) => {
            amount += 1;
            const dividend = currenciesItem.dividend.values[index] || 1;
            const divisor = currenciesItem.divisor.values[index] || 1;
            const value = dividend / divisor;
            sum += value;
            const month = date.split('.')[1];
            if (month !== currentMonth) {
                currentMonthIndex++;
                currentMonth = month;
                const average = this.calcAverage(sum, amount);
                this.addDataItem(currencyIndex, currentMonthIndex, average);
                amount = 0;
                sum = 0;
                this.addDrilldownItem(currentMonthIndex, currencyIndex);
            }
            currenciesItem.drilldownData[currentMonthIndex].data.push(value);

        });
        const average = this.calcAverage(sum, amount);
        this.addDataItem(currencyIndex, currentMonthIndex + 1, average);
        this.updateDrilldownSeries();
    },
    changeYear(to) {
        let dateEnd = null;
        let dateStart = null;
        switch (to) {
            case 'prev':
                dateEnd = this.dateStart;
                dateStart = new Date(+dateEnd);
                dateStart.setFullYear(dateEnd.getFullYear() - 1);
                break;
            case 'next':
                if (this.dateEnd.getFullYear() === new Date().getFullYear()) {
                    return;
                }
                dateStart = this.dateEnd;
                dateEnd = new Date(+dateStart);
                dateEnd.setFullYear(dateStart.getFullYear() + 1);
        }
        this.updateDates(dateStart, dateEnd);
    },
    formatDate(date) {
        return ('0' + date).slice(-2)
    },
    getMonthIndex(date) {
        return +date.split('.')[1];
    },
    getId(currencyIndex, currencyType) {
        return this.currencies[currencyIndex][currencyType].id ||
            this.defaultIds[currencyIndex][currencyType];
    },
    updateDrilldownSeries() {
        this.drilldownSeries.length = 0;
        const drillDownData1 = this.currencies[0].drilldownData;
        const drillDownData2 = this.currencies[1].drilldownData;

        if (drillDownData1.length) {
            this.drilldownSeries.push.apply(this.drilldownSeries, drillDownData1)
        }
        if (drillDownData2.length) {
            this.drilldownSeries.push.apply(this.drilldownSeries, drillDownData2)
        }
    },
    updateChart(currencyIndex) {
        const currenciesItem = this.currencies[currencyIndex];
        this.chart.xAxis[0].categories = this.dates;
        this.chart.series[currencyIndex].update({
            name: currenciesItem.name,
            data: currenciesItem.data
        });
        this.chart.xAxis[0].update();
        this.chart.yAxis[currencyIndex].update({
            title: {
                text: currenciesItem.name
            }
        });
        this.chart.setTitle({
            text: this.title
        })
    },
    async getCurrencyData(id) {
        const dateStartDate = this.formatDate(this.dateStart.getDate());
        const dateStartMonth = this.formatDate(this.dateStart.getMonth() + 1);
        const dateStartYear = this.dateStart.getFullYear();
        const dateEndDate = this.formatDate(this.dateEnd.getDate());
        const dateEndMonth = this.formatDate(this.dateEnd.getMonth() + 1);
        const dateEndYear = this.dateEnd.getFullYear();
        return $.ajax('index.php', {
            method: 'get',
            dataType: 'xml',
            data: {
                url: 'https://www.cbr.ru/scripts/XML_dynamic.asp',
                params: {
                    date_req1: `${dateStartDate}/${dateStartMonth}/${dateStartYear}`,
                    date_req2: `${dateEndDate}/${dateEndMonth}/${dateEndYear}`,
                    VAL_NM_RQ: id
                },
            }
        }).done(response => {
            return response;
        });
    },
    addDrilldownItem(monthIndex, currencyIndex) {
        const currenciesItem = this.currencies[currencyIndex];
        currenciesItem.drilldownData.push({
            month: monthIndex,
            yAxis: currencyIndex,
            id: String(currencyIndex) + (monthIndex + 1),
            data: [],
            name: currenciesItem.name
        })
    },
    addDataItem(currencyIndex, monthIndex, value) {
        const currenciesItem = this.currencies[currencyIndex];
        currenciesItem.data.push({
            drilldown: String(currencyIndex) + monthIndex,
            y: value
        });
    },
    calcAverage(sum, amount) {
        return +(sum / amount).toFixed(4)
    }
}

export default chartData;