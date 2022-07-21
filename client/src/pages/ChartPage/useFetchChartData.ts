// dependencies
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
// types
import { ChartInfo } from 'customType/chart.type';
import { FilterType } from 'utils';
// etc
import * as Api from 'api';
import {
  createLabelDaily,
  createLabelMonthly,
  createLabelWeekly,
} from './createLabel';

const initialData = {
  data: {
    weight: [],
    kcalAvg: [],
    carbAvg: [],
    proteinAvg: [],
    fatAvg: [],
    kcalSum: 0,
    carbSum: 0,
    proteinSum: 0,
    fatSum: 0,
    sugarsSum: 0,
    natriumSum: 0,
    cholesterolSum: 0,
    saturatedfattySum: 0,
    transfatSum: 0,
  },
  labels: [],
};

function useFetchChartData() {
  const [chartData, setChartData] = useState<ChartInfo>(initialData);
  const [error, setError] = useState('');

  const getChartDataByFilter = useCallback(
    async (filter: FilterType, date: dayjs.Dayjs) => {
      try {
        if (filter === 'DAILY') {
          const data = (
            await Api.get(`/api/chart/daily?date=${date.format('YYYY-MM-DD')}`)
          )?.data;

          const labels = createLabelDaily(date);

          if (!data) {
            setChartData({ data: initialData.data, labels });
            throw new Error('Request Failed');
          }

          setChartData({ data, labels });
        } else if (filter === 'WEEKLY') {
          const aFourWeeksAgo = date
            .add(-4, 'week')
            .add(1, 'day')
            .format('YYYY-MM-DD');

          const data = (
            await Api.get(
              `/api/chart/weekly?from=${aFourWeeksAgo}&to=${date.format(
                'YYYY-MM-DD',
              )}`,
            )
          )?.data;

          const labels = createLabelWeekly(date);

          if (!data) {
            setChartData({ data: initialData.data, labels });
            throw new Error('Request Failed');
          }

          setChartData({ data, labels });
        } else {
          const aTwoMonthAgo = date
            .add(-2, 'month')
            .date(1)
            .format('YYYY-MM-DD');

          const data = (
            await Api.get(
              `/api/chart/monthly?from=${aTwoMonthAgo}&to=${date
                .date(1)
                .format('YYYY-MM-DD')}`,
            )
          )?.data;

          const labels = createLabelMonthly(date);

          if (!data) {
            setChartData({ data: initialData.data, labels });
            throw new Error('Request Failed');
          }

          setChartData({ data, labels });
        }
      } catch (err: any) {
        setError(err.message);
      }
    },
    [],
  );

  return { getChartDataByFilter, chartData, error };
}

export default useFetchChartData;
