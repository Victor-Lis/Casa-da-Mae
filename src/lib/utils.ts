// Utilitário simples para concatenar classes (similar ao cn do shadcn)
export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ")
}
