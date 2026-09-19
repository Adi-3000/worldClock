// Precise Timezone & IST Math Utilities

export const IST_TIMEZONE = 'Asia/Kolkata';

/**
 * Gets formatted timezone info with abbreviation and offset string (e.g. "EDT • UTC-04:00")
 */
export function getFormattedTzDetails(date = new Date(), timezone = IST_TIMEZONE) {
  try {
    const partsShort = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'short'
    }).formatToParts(date);
    
    const partsLongOffset = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'shortOffset'
    }).formatToParts(date);

    const tzAbbr = partsShort.find(p => p.type === 'timeZoneName')?.value || '';
    const utcOffset = partsLongOffset.find(p => p.type === 'timeZoneName')?.value || '';

    return {
      tzAbbr,
      utcOffset,
      badgeText: tzAbbr === utcOffset ? tzAbbr : `${tzAbbr} (${utcOffset})`,
      fullIdentifier: timezone
    };
  } catch {
    return {
      tzAbbr: '',
      utcOffset: '',
      badgeText: timezone,
      fullIdentifier: timezone
    };
  }
}

/**
 * Gets a formatted object representing current or custom time in a target timezone.
 * @param {Date} date
 * @param {string} timezone - IANA timezone e.g. 'America/New_York'
 * @param {boolean} is24Hour - 24-hour mode flag
 */
export function getTimeInfo(date, timezone = IST_TIMEZONE, is24Hour = false) {
  try {
    const options = {
      timeZone: timezone,
      hour12: !is24Hour,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    };

    // Formatted time parts
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    
    let hour = '';
    let minute = '';
    let second = '';
    let dayPeriod = '';

    for (const p of parts) {
      if (p.type === 'hour') hour = p.value;
      if (p.type === 'minute') minute = p.value;
      if (p.type === 'second') second = p.value;
      if (p.type === 'dayPeriod') dayPeriod = p.value;
    }

    // Also get 24-hour hour number for phase calculation
    const hour24Str = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour12: false,
      hour: 'numeric'
    }).format(date);
    const hour24 = parseInt(hour24Str, 10) % 24;

    // Date string (e.g. "Sat, Sep 19")
    const dateStr = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);

    // Full date string with year (e.g. "Saturday, September 19, 2026")
    const fullDateStr = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);

    // Timezone details
    const tzDetails = getFormattedTzDetails(date, timezone);

    // Day/Night Phase
    let phase = 'night';
    if (hour24 >= 5 && hour24 < 8) phase = 'dawn';
    else if (hour24 >= 8 && hour24 < 17) phase = 'day';
    else if (hour24 >= 17 && hour24 < 20) phase = 'dusk';
    else phase = 'night';

    // Business tier
    let businessStatus = 'sleep';
    if (hour24 >= 9 && hour24 < 18) businessStatus = 'work';
    else if ((hour24 >= 7 && hour24 < 9) || (hour24 >= 18 && hour24 < 22)) businessStatus = 'leisure';
    else businessStatus = 'sleep';

    return {
      hour,
      minute,
      second,
      dayPeriod: is24Hour ? '' : dayPeriod,
      timeString: is24Hour ? `${hour.padStart(2, '0')}:${minute}` : `${hour}:${minute} ${dayPeriod}`,
      timeWithSeconds: is24Hour ? `${hour.padStart(2, '0')}:${minute}:${second}` : `${hour}:${minute}:${second} ${dayPeriod}`,
      hour24,
      minuteNum: parseInt(minute, 10),
      secondNum: parseInt(second, 10),
      dateStr,
      fullDateStr,
      tzName: tzDetails.tzAbbr,
      utcOffset: tzDetails.utcOffset,
      tzBadge: tzDetails.badgeText,
      timezone,
      phase,
      businessStatus
    };
  } catch (err) {
    console.error(`Error formatting time for ${timezone}:`, err);
    return {
      hour: '--',
      minute: '--',
      second: '--',
      dayPeriod: '',
      timeString: '--:--',
      timeWithSeconds: '--:--:--',
      hour24: 0,
      minuteNum: 0,
      secondNum: 0,
      dateStr: '',
      fullDateStr: '',
      tzName: '',
      utcOffset: '',
      tzBadge: '',
      timezone,
      phase: 'night',
      businessStatus: 'sleep'
    };
  }
}

/**
 * Calculates the exact minute offset between a target timezone and IST.
 */
export function getMinutesOffsetFromIST(date, targetTimezone) {
  if (targetTimezone === IST_TIMEZONE) return 0;
  
  try {
    const targetFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: targetTimezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    const istFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: IST_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    const parseParts = (formatter, d) => {
      const parts = formatter.formatToParts(d);
      const val = {};
      parts.forEach(p => { if (p.type !== 'literal') val[p.type] = p.value; });
      return new Date(Date.UTC(
        parseInt(val.year, 10),
        parseInt(val.month, 10) - 1,
        parseInt(val.day, 10),
        parseInt(val.hour, 10),
        parseInt(val.minute, 10),
        parseInt(val.second, 10)
      )).getTime();
    };

    const targetTimeMs = parseParts(targetFormatter, date);
    const istTimeMs = parseParts(istFormatter, date);

    return Math.round((targetTimeMs - istTimeMs) / (60 * 1000));
  } catch (e) {
    return 0;
  }
}

/**
 * Formats difference relative to IST into human-readable label.
 */
export function formatOffsetLabel(minutesDiff, date, targetTz) {
  if (minutesDiff === 0) return 'Same as IST';

  const sign = minutesDiff > 0 ? '+' : '-';
  const absMinutes = Math.abs(minutesDiff);
  const hours = Math.floor(absMinutes / 60);
  const mins = absMinutes % 60;

  const diffStr = mins > 0 ? `${sign}${hours}h ${mins}m` : `${sign}${hours}h`;

  const istDay = new Intl.DateTimeFormat('en-US', { timeZone: IST_TIMEZONE, day: 'numeric' }).format(date);
  const targetDay = new Intl.DateTimeFormat('en-US', { timeZone: targetTz, day: 'numeric' }).format(date);

  let relativeDay = '';
  if (istDay !== targetDay) {
    relativeDay = minutesDiff > 0 ? ' • Tomorrow' : ' • Yesterday';
  }

  return `${diffStr} from IST${relativeDay}`;
}

/**
 * Converts given hours & minutes from IST of a given base date into target timezone Date.
 */
export function convertISTtoTarget(istHours, istMinutes, baseDate = new Date(), targetTz = IST_TIMEZONE, is24Hour = false) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const day = baseDate.getDate();

  const istDateMs = Date.UTC(year, month, day, istHours, istMinutes, 0);
  const utcDateMs = istDateMs - (5.5 * 60 * 60 * 1000);
  const targetDate = new Date(utcDateMs);

  return getTimeInfo(targetDate, targetTz, is24Hour);
}

/**
 * Converts given hours & minutes from a Target timezone of base date into IST representation.
 */
export function convertTargetToIST(targetHours, targetMinutes, baseDate = new Date(), fromTz = IST_TIMEZONE, is24Hour = false) {
  const testDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), 12, 0, 0);
  const offsetFromIst = getMinutesOffsetFromIST(testDate, fromTz);

  const totalTargetMinutes = targetHours * 60 + targetMinutes;
  let istMinutesTotal = totalTargetMinutes - offsetFromIst;

  let dayDelta = 0;
  if (istMinutesTotal < 0) {
    dayDelta = -1;
    istMinutesTotal += 24 * 60;
  } else if (istMinutesTotal >= 24 * 60) {
    dayDelta = 1;
    istMinutesTotal -= 24 * 60;
  }

  const istH = Math.floor(istMinutesTotal / 60);
  const istM = istMinutesTotal % 60;

  const targetDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + dayDelta);
  return convertISTtoTarget(istH, istM, targetDate, IST_TIMEZONE, is24Hour);
}

/**
 * Generates 24-hour comparison blocks for a given base IST date and target timezones.
 */
export function generate24HourSlots(baseDate, timezones = [IST_TIMEZONE], is24Hour = false) {
  const slots = [];

  for (let hour = 0; hour < 24; hour++) {
    const slotTimes = {};
    timezones.forEach(tz => {
      slotTimes[tz] = convertISTtoTarget(hour, 0, baseDate, tz, is24Hour);
    });

    slots.push({
      istHour: hour,
      slotTimes
    });
  }

  return slots;
}
