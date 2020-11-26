import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export function formatDate(date: Date) {
    return format(date, 'Pp', { locale: enGB });
}
