export interface SafetyAlertItemProps {
  id: number;
  summary: string;
  content: string;
  time: string;
  isNew: boolean;
}

export interface SafetyAlertProps {
  date: string;
  notifications: SafetyAlertItemProps[];
}
