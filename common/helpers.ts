const Unit = {
  Year: 31536000,
  Month: 2592000,
  Week: 604800,
  Day: 86400,
  Hour: 3600,
  Minute: 60,
  Second: 1
}

export const timeAgo = (date: string | number | Date) => {
  const phrases: string[] = []
  let seconds = Math.floor(
    (new Date().valueOf() - new Date(date).valueOf()) / 1000
  )

  for (const [unit, unitSeconds] of Object.entries(Unit) as [
    keyof typeof Unit,
    number
  ][]) {
    if (unit === 'Second') continue

    let interval = seconds / unitSeconds

    if (interval > 1 && seconds > 0) {
      const number = Math.floor(interval)

      phrases.push(`${number} ${unit.toLowerCase()}${number > 1 ? 's' : ''}`)
      seconds -= unitSeconds * number
    }
  }

  if (seconds > 0) {
    phrases.push(`${seconds} ${seconds > 1 ? 'seconds' : 'second'}`)
  }

  return `${phrases.join(' and ')} ago`
}
