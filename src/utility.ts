import dayjs from "dayjs"

export const getAge = (birthday: string): number => {
  const today = dayjs()
  const dayjsBirthday = dayjs(birthday)
  const age = today.diff(dayjsBirthday, 'year')
  return age
}
