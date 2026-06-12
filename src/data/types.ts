/**
 * Общие типы для данных сервисных страниц.
 *
 * Использование:  import { ServiceItem, SubDirection } from "@/data/types"
 */

export interface ServiceItem {
  name: string;
  description: string;
  isTop?: boolean;
}

export interface SubDirection {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  services: ServiceItem[];
}
