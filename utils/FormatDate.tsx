import dayjs from 'dayjs'

export const formatDate = (date: number) => {
  return {
    day: dayjs(new Date(date)).format('DD'),
    month: dayjs(new Date(date)).format('MMM'),
    year: dayjs(new Date(date)).format('YYYY'),
  }
}
