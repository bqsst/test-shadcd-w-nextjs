import { toast as sonnerToast } from "sonner"

export function toast(props: { title: string; description?: React.ReactNode }) {
  return sonnerToast(props.title, {
    description: props.description,
  })
} 