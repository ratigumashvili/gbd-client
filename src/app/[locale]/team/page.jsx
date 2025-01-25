"use client"

import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';

export default function TeamPage() {
  const locale = useLocale();

  return redirect(`/${locale}/team/editors`)
}