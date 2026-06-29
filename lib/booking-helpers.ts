export type DayOption = {
  date: string;
  label: string;
  dayNum: number;
  isToday: boolean;
};

export type CalendarCell = {
  date: string;
  day: number;
  inMonth: boolean;
  isToday: boolean;
  isSelectable: boolean;
};

const WEEKDAYS = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"] as const;

export function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function parseDateString(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function isDateSelectable(date: Date, today = startOfDay(new Date())): boolean {
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 3);

  if (date < today) return false;
  if (date > maxDate) return false;
  if (date.getDay() === 0) return false;
  return true;
}

export function getCalendarMonth(year: number, month: number): CalendarCell[] {
  const today = startOfDay(new Date());
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: CalendarCell[] = [];

  for (let i = 0; i < startOffset; i++) {
    const date = new Date(year, month, -startOffset + i + 1);
    cells.push({
      date: toDateString(date),
      day: date.getDate(),
      inMonth: false,
      isToday: false,
      isSelectable: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateStr = toDateString(date);
    cells.push({
      date: dateStr,
      day,
      inMonth: true,
      isToday: date.getTime() === today.getTime(),
      isSelectable: isDateSelectable(date, today),
    });
  }

  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1];
    const lastDate = parseDateString(last.date);
    lastDate.setDate(lastDate.getDate() + 1);
    cells.push({
      date: toDateString(lastDate),
      day: lastDate.getDate(),
      inMonth: false,
      isToday: false,
      isSelectable: false,
    });
  }

  return cells;
}

export function getMonthLabel(year: number, month: number): string {
  const label = new Date(year, month, 1).toLocaleDateString("es-MX", {
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function getQuickDates(): DayOption[] {
  const today = startOfDay(new Date());
  const options: DayOption[] = [];

  let cursor = new Date(today);
  let found = 0;
  while (found < 2) {
    if (cursor.getDay() !== 0) {
      const isToday = cursor.getTime() === today.getTime();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const isTomorrow = cursor.getTime() === tomorrow.getTime();

      options.push({
        date: toDateString(cursor),
        label: isToday ? "Hoy" : isTomorrow ? "Mañana" : "",
        dayNum: cursor.getDate(),
        isToday,
      });
      found++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return options;
}

export function getUpcomingDays(count = 10): DayOption[] {
  const days: DayOption[] = [];
  const today = startOfDay(new Date());

  let cursor = new Date(today);
  while (days.length < count) {
    if (cursor.getDay() !== 0) {
      const isToday = cursor.getTime() === today.getTime();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const isTomorrow = cursor.getTime() === tomorrow.getTime();

      let label: string;
      if (isToday) label = "Hoy";
      else if (isTomorrow) label = "Mañana";
      else {
        label = cursor.toLocaleDateString("es-MX", {
          weekday: "short",
          day: "numeric",
        });
      }

      days.push({
        date: toDateString(cursor),
        label,
        dayNum: cursor.getDate(),
        isToday,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

export function formatDateLong(dateStr: string): string {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export { WEEKDAYS };

export const POPULAR_BY_CATEGORY: Record<string, string[]> = {
  faciales: [
    "camara-diagnostico",
    "diamond-glow",
    "geneo",
    "morpheus-8-facial",
  ],
  "medicina-estetica": [
    "toxina-botulinica",
    "acido-hialuronico",
    "profhilo",
    "estimuladores-colageno",
  ],
  corporales: [
    "morpheus-8-corporal",
    "alma-prime-x",
    "depilacion-diodo",
    "carboxiterapia",
  ],
};

export const QUICK_INTENTS = [
  {
    id: "valoracion",
    label: "Valoración",
    emoji: "✦",
    categoryId: "faciales",
    serviceId: "camara-diagnostico",
  },
  {
    id: "facial",
    label: "Facial",
    emoji: "◈",
    categoryId: "faciales",
    serviceId: "diamond-glow",
  },
  {
    id: "estetica",
    label: "Estética",
    emoji: "◇",
    categoryId: "medicina-estetica",
    serviceId: "toxina-botulinica",
  },
  {
    id: "aparatologia",
    label: "Aparatología",
    emoji: "◎",
    categoryId: "corporales",
    serviceId: "morpheus-8-corporal",
    whatsappOnly: true,
  },
] as const;
