import { CalendarModel, calendarModel } from '../db';
import { CalendarData } from '../types/calendar.type';
import { ChartData, DayInfo, FromToInfo } from '../types/chart.type';
import dayjs from 'dayjs';

class ChartService {
  constructor(private calendarModel: CalendarModel) {}

  async getOneDayChart(fromToInfo: FromToInfo): Promise<CalendarData[] | null> {
    return await this.calendarModel.findByDate(fromToInfo);
  }

  // 일간 차트 서비스
  async getDailyChart(dayInfo: DayInfo): Promise<ChartData | null> {
    //받은 날짜로 계산
    const toDate: Date = new Date(dayInfo.date);
    const fromDate: Date = new Date(toDate);
    fromDate.setDate(toDate.getDate() - 6);
    toDate.setDate(toDate.getDate() + 1);
    const from: string = fromDate.toISOString().slice(0, 10);
    const to: string = toDate.toISOString().slice(0, 10);

    const updatedInfo: FromToInfo = {
      user_id: dayInfo.user_id,
      from,
      to,
    };

    //전체 데이터 받음
    const data = await this.calendarModel.findByDate(updatedInfo);

    //인터페이스 초기화
    const dailyData: ChartData = {
      userId: dayInfo.user_id,
      weight: [0, 0, 0, 0, 0, 0, 0],
      kcalAvg: [0, 0, 0, 0, 0, 0, 0],
      carbAvg: [0, 0, 0, 0, 0, 0, 0],
      proteinAvg: [0, 0, 0, 0, 0, 0, 0],
      fatAvg: [0, 0, 0, 0, 0, 0, 0],
      kcalSum: 0,
      carbSum: 0,
      proteinSum: 0,
      fatSum: 0,
      sugarsSum: 0,
      natriumSum: 0,
      cholesterolSum: 0,
      saturatedfattySum: 0,
      transfatSum: 0,
    };

    if (!data || data.length === 0) {
      return dailyData;
    }

    const chartSlotList: string[] = new Array(7);
    for (let i = 0; i < 7; i++) {
      chartSlotList[i] = String(
        dayjs(fromDate).add(i, 'day').format('YYYY-MM-DD'),
      );
    }

    let count = 0;
    for (let day = 0; day < 7; day++) {
      if (chartSlotList[day] === data[count].date.toISOString().slice(0, 10)) {
        dailyData.weight[day] = data[count].todayWeight;
        dailyData.kcalAvg[day] = data[count].currentKcal;
        dailyData.carbAvg[day] = data[count].carbSum;
        dailyData.proteinAvg[day] = data[count].proteinSum;
        dailyData.fatAvg[day] = data[count].fatSum;
        dailyData.kcalSum =
          Number(data[count].currentKcal) + Number(dailyData.kcalSum);
        dailyData.carbSum =
          Number(data[count].carbSum) + Number(dailyData.carbSum);
        dailyData.proteinSum =
          Number(data[count].proteinSum) + Number(dailyData.proteinSum);
        dailyData.fatSum =
          Number(data[count].fatSum) + Number(dailyData.fatSum);
        dailyData.sugarsSum =
          Number(data[count].sugarsSum) + Number(dailyData.sugarsSum);
        dailyData.natriumSum =
          Number(data[count].natriumSum) + Number(dailyData.natriumSum);
        dailyData.cholesterolSum =
          Number(data[count].cholesterolSum) + Number(dailyData.cholesterolSum);
        dailyData.saturatedfattySum =
          Number(data[count].saturatedfattySum) +
          Number(dailyData.saturatedfattySum);
        dailyData.transfatSum =
          Number(data[count].transfatSum) + Number(dailyData.transfatSum);
        count++;
      }
      if (count >= data.length) break;
    }

    return dailyData;
  }

  // 주간차트 서비스
  async getWeeklyChart(fromToInfo: FromToInfo): Promise<ChartData | null> {
    //받은 날짜로 계산
    const fromDate: Date = new Date(fromToInfo.from);
    const toDate: Date = new Date(fromToInfo.to);
    toDate.setDate(toDate.getDate() + 1);
    const from: string = fromDate.toISOString().slice(0, 10);
    const to: string = toDate.toISOString().slice(0, 10);

    const updatedInfo: FromToInfo = {
      user_id: fromToInfo.user_id,
      from,
      to,
    };

    const data = await this.calendarModel.findByDate(updatedInfo);

    //인터페이스 초기화
    const weeklyData: ChartData = {
      userId: fromToInfo.user_id,
      weight: [0, 0, 0, 0],
      kcalAvg: [0, 0, 0, 0],
      carbAvg: [0, 0, 0, 0],
      proteinAvg: [0, 0, 0, 0],
      fatAvg: [0, 0, 0, 0],
      kcalSum: 0,
      carbSum: 0,
      proteinSum: 0,
      fatSum: 0,
      sugarsSum: 0,
      natriumSum: 0,
      cholesterolSum: 0,
      saturatedfattySum: 0,
      transfatSum: 0,
    };

    if (!data || data.length === 0) {
      return weeklyData;
    }

    //날짜 기준이 될 날짜 슬롯을 생성 - 4주, 28일
    const chartSlotList: string[] = new Array(28);
    for (let i = 0; i < 28; i++) {
      chartSlotList[i] = String(dayjs(from).add(i, 'day').format('YYYY-MM-DD'));
    }

    //aggregate로 바꾸기

    //data index
    let count = 0;
    let checked = 0;

    let weight = 0;
    let kcal = 0;
    let carb = 0;
    let protein = 0;
    let fat = 0;
    //28주의 날짜를 각각 비교
    for (let week = 0; week < 4; week++) {
      for (let day = 0; day < 7; day++) {
        if (
          chartSlotList[week * 7 + day] ===
          data[count].date.toISOString().slice(0, 10)
        ) {
          weight = Number(weight) + Number(data[count].todayWeight);
          kcal = Number(kcal) + Number(data[count].currentKcal);
          carb = Number(carb) + Number(data[count].carbSum);
          protein = Number(protein) + Number(data[count].proteinSum);
          fat = Number(fat) + Number(data[count].fatSum);

          weeklyData.kcalSum =
            Number(data[count].currentKcal) + Number(weeklyData.kcalSum);
          weeklyData.carbSum =
            Number(data[count].carbSum) + Number(weeklyData.carbSum);
          weeklyData.proteinSum =
            Number(data[count].proteinSum) + Number(weeklyData.proteinSum);
          weeklyData.fatSum =
            Number(data[count].fatSum) + Number(weeklyData.fatSum);
          weeklyData.sugarsSum =
            Number(data[count].sugarsSum) + Number(weeklyData.sugarsSum);
          weeklyData.natriumSum =
            Number(data[count].natriumSum) + Number(weeklyData.natriumSum);
          weeklyData.cholesterolSum =
            Number(data[count].cholesterolSum) +
            Number(weeklyData.cholesterolSum);
          weeklyData.saturatedfattySum =
            Number(data[count].saturatedfattySum) +
            Number(weeklyData.saturatedfattySum);
          weeklyData.transfatSum =
            Number(data[count].transfatSum) + Number(weeklyData.transfatSum);
          count++;
          checked++;
        }

        if (day === 6) {
          console.log(weight);
          weeklyData.weight[week] = weight === 0 ? 0 : weight / checked;
          weight = 0;
          weeklyData.kcalAvg[week] = kcal === 0 ? 0 : kcal / checked;
          kcal = 0;
          weeklyData.carbAvg[week] = carb === 0 ? 0 : carb / checked;
          carb = 0;
          weeklyData.proteinAvg[week] = protein === 0 ? 0 : protein / checked;
          protein = 0;
          weeklyData.fatAvg[week] = protein === 0 ? 0 : protein / checked;
          fat = 0;
          checked = 0;
        }
        if (count >= data.length) break;
      }
      if (count >= data.length) break;
    }

    return weeklyData;
  }

  async getMonthlyChart(fromToInfo: FromToInfo): Promise<ChartData | null> {
    //받은 날짜로 계산 - 3개월의 총 날짜수
    const totalDays: number[] = new Array(4);
    totalDays[0] = 0; // 첫번째 값을 빈칸으로 둬 날짜 슬로팅을 편하게 함

    let fromDate = dayjs(fromToInfo.from);
    totalDays[1] = fromDate.daysInMonth();
    fromDate = fromDate.add(1, 'month');
    totalDays[2] = fromDate.daysInMonth() + totalDays[1];
    fromDate = fromDate.add(1, 'month');
    totalDays[3] = fromDate.daysInMonth() + totalDays[2];
    const toDate = dayjs(fromDate).add(1, 'month');

    const from: string = fromToInfo.from;
    const to: string = toDate.format().slice(0, 10);

    const updatedInfo: FromToInfo = {
      user_id: fromToInfo.user_id,
      from: fromToInfo.from,
      to,
    };

    const data = await this.calendarModel.findByDate(updatedInfo);

    //인터페이스 초기화
    const monthlyData: ChartData = {
      userId: fromToInfo.user_id,
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
    };

    if (!data || data.length === 0) {
      return monthlyData;
    }

    //날짜 기준이 될 날짜 슬롯을 생성 -
    const chartSlotList: string[] = new Array(totalDays[3]);
    for (let i = 0; i < totalDays[3]; i++) {
      chartSlotList[i] = String(dayjs(from).add(i, 'day').format('YYYY-MM-DD'));
    }

    //aggregate로 바꾸기

    //총 데이터 개수를 체크하는 변수
    let count = 0;
    // 실제로 한달 동안 있는 값의 수를 체크하는 변수
    let checked = 0;

    let weight = 0;
    let kcal = 0;
    let carb = 0;
    let protein = 0;
    //28주의 날짜를 각각 비교
    for (let month = 1; month < totalDays.length; month++) {
      for (let day = 0; day < totalDays[month] - totalDays[month - 1]; day++) {
        if (
          chartSlotList[totalDays[month - 1] + day] ===
          data[count].date.toISOString().slice(0, 10)
        ) {
          console.log(chartSlotList[totalDays[month - 1] + day]);
          console.log(data[count].date.toISOString().slice(0, 10));
          weight = Number(weight) + Number(data[count].todayWeight);
          kcal = Number(kcal) + Number(data[count].currentKcal);
          carb = Number(carb) + Number(data[count].carbSum);
          protein = Number(protein) + Number(data[count].proteinSum);

          monthlyData.kcalSum =
            Number(data[count].currentKcal) + Number(monthlyData.kcalSum);
          monthlyData.carbSum =
            Number(data[count].carbSum) + Number(monthlyData.carbSum);
          monthlyData.proteinSum =
            Number(data[count].proteinSum) + Number(monthlyData.proteinSum);
          monthlyData.fatSum =
            Number(data[count].fatSum) + Number(monthlyData.fatSum);
          monthlyData.sugarsSum =
            Number(data[count].sugarsSum) + Number(monthlyData.sugarsSum);
          monthlyData.natriumSum =
            Number(data[count].natriumSum) + Number(monthlyData.natriumSum);
          monthlyData.cholesterolSum =
            Number(data[count].cholesterolSum) +
            Number(monthlyData.cholesterolSum);
          monthlyData.saturatedfattySum =
            Number(data[count].saturatedfattySum) +
            Number(monthlyData.saturatedfattySum);
          monthlyData.transfatSum =
            Number(data[count].transfatSum) + Number(monthlyData.transfatSum);
          count++;
          checked++;
        }

        if (day === 6) {
          console.log(weight);
          monthlyData.weight.push(weight === 0 ? 0 : weight / checked);
          weight = 0;
          monthlyData.kcalAvg.push(kcal === 0 ? 0 : kcal / checked);
          kcal = 0;
          monthlyData.carbAvg.push(carb === 0 ? 0 : carb / checked);
          carb = 0;
          monthlyData.proteinAvg.push(protein === 0 ? 0 : protein / checked);
          protein = 0;
          checked = 0;
        }
        if (count >= data.length) break;
      }
      if (count >= data.length) break;
    }
    console.log(monthlyData);
    console.log(count);

    return monthlyData;
  }
}

const chartService = new ChartService(calendarModel);
export { chartService };
