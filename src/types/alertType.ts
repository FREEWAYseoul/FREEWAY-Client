export interface SafetyAlertItemProps {
  id: number;
  summary: string;
  content: string;
  time: string;
}

export interface SafetyAlertProps {
  date: string;
  notifications: SafetyAlertItemProps[];
}
