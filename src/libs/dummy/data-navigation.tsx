import {
  CircleUser,
  Computer,
  Key,
  LayoutDashboard,
  Scroll,
} from 'lucide-react'

export const DataNavigation = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboard size={18} />,
  },
  {
    title: 'Profile',
    icon: <CircleUser size={18} />,
  },
  {
    title: 'Ujian',
    icon: <Computer size={18} />,
  },
  {
    title: 'Hasil Ujian',
    icon: <Scroll size={18} />,
  },
  {
    title: 'Ganti Password',
    icon: <Key size={18} />,
  },
]
