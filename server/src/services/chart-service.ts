import { CalendarModel, calendarModel } from '../db';
import { CalendarData } from '../types/calendar.type';
import { ChartData, DayInfo, FromToInfo } from '../types/chart.type';
import dayjs from 'dayjs';

// 1. 일간 합 : 하루의 각합을 7일 전 정보까지 받아서 돌려주기

// 2. 주간 합 : 7일로 총합하는 서비스 <- 이걸 4번 하면 월간

// 3. 월간 합 : 월별로 합하는 서비스

// 4. 주간 합을 받아서 4주 평균을 내기

// 5. 월간 합을 받아서 3개월 평균을 내기

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

    if (!data) {
      return {} as ChartData;
    }

    //인터페이스 초기화
    let dailyData: ChartData = {
      userId: 'undefined',
      weight: [],
      kcalAvg: [],
      carbAvg: [],
      proteinAvg: [],
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

    dailyData.userId = data[0].userId;

    for (let i = 0; i < data.length; i++) {
      dailyData.weight.push(data[i].todayWeight);
      dailyData.kcalAvg.push(data[i].currentKcal);
      dailyData.carbAvg.push(data[i].carbSum);
      dailyData.proteinAvg.push(data[i].proteinSum);
      dailyData.kcalSum =
        Number(data[i].currentKcal) + Number(dailyData.kcalSum);
      dailyData.carbSum = Number(data[i].carbSum) + Number(dailyData.carbSum);
      dailyData.proteinSum =
        Number(data[i].proteinSum) + Number(dailyData.proteinSum);
      dailyData.fatSum = Number(data[i].fatSum) + Number(dailyData.fatSum);
      dailyData.sugarsSum =
        Number(data[i].sugarsSum) + Number(dailyData.sugarsSum);
      dailyData.natriumSum =
        Number(data[i].natriumSum) + Number(dailyData.natriumSum);
      dailyData.cholesterolSum =
        Number(data[i].cholesterolSum) + Number(dailyData.cholesterolSum);
      dailyData.saturatedfattySum =
        Number(data[i].saturatedfattySum) + Number(dailyData.saturatedfattySum);
      dailyData.transfatSum =
        Number(data[i].transfatSum) + Number(dailyData.transfatSum);
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

    if (!data) {
      return {} as ChartData;
    }

    //날짜 기준이 될 날짜 슬롯을 생성 - 4주, 28일
    let chartSlotList: string[] = new Array(28);
    for (let i = 0; i < 28; i++) {
      chartSlotList[i] = String(dayjs(from).add(i, 'day').format('YYYY-MM-DD'));
    }

    //aggregate로 바꾸기
    //인터페이스 초기화
    let weeklyData: ChartData = {
      userId: fromToInfo.user_id,
      weight: [],
      kcalAvg: [],
      carbAvg: [],
      proteinAvg: [],
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
    //data index
    let count = 0;
    let checked = 0;

    let weight = 0;
    let kcal = 0;
    let carb = 0;
    let protein = 0;
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
          weeklyData.weight.push(weight === 0 ? 0 : weight / checked);
          weight = 0;
          weeklyData.kcalAvg.push(kcal === 0 ? 0 : kcal / checked);
          kcal = 0;
          weeklyData.carbAvg.push(carb === 0 ? 0 : carb / checked);
          carb = 0;
          weeklyData.proteinAvg.push(protein === 0 ? 0 : protein / checked);
          protein = 0;
          checked = 0;
        }
      }
    }

    return weeklyData;
  }

  async getMonthlyChart(fromToInfo: FromToInfo): Promise<ChartData | null> {
    //받은 날짜로 계산 - 3개월의 총 날짜수
    let totalDays: number[] = new Array(4);
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
    console.log(data);
    if (!data || data.length === 0) {
      return {} as ChartData;
    }

    //날짜 기준이 될 날짜 슬롯을 생성 -
    let chartSlotList: string[] = new Array(totalDays[3]);
    for (let i = 0; i < totalDays[3]; i++) {
      chartSlotList[i] = String(dayjs(from).add(i, 'day').format('YYYY-MM-DD'));
    }

    //aggregate로 바꾸기
    //인터페이스 초기화
    let monthlyData: ChartData = {
      userId: fromToInfo.user_id,
      weight: [],
      kcalAvg: [],
      carbAvg: [],
      proteinAvg: [],
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
