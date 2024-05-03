import { Dispatch, ReactNode, SetStateAction } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import clsx from 'clsx'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/atoms/Dialog'

export function DialogHelpers({
  open,
  setOpen,
  title,
  customComponent,
  noPadding,
  size,
  height,
  isPhoneAuto,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  title: string | ReactNode
  customComponent?: ReactNode
  noPadding?: boolean
  size?: 'full' | 'large' | 'medium' | 'small'
  isPhoneAuto?: boolean
  height?: string
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="text-dark scrollbar flex flex-col overflow-y-auto bg-background text-white"
        style={{
          width: size?.includes('full')
            ? '100%'
            : size?.includes('medium')
              ? '50%'
              : size?.includes('small')
                ? '30%'
                : isPhoneAuto
                  ? '75%'
                  : '',
          height: size?.includes('full') ? '100%' : height ? height : '',
        }}
      >
        <DialogHeader>
          <DialogTitle
            className={clsx('', {
              'p-0': noPadding,
              'px-48 pt-48': !noPadding,
            })}
          >
            <span className="font-roboto text-[3rem] font-semibold">
              {title}
            </span>
          </DialogTitle>
          <DialogPrimitive.Close
            className={clsx(
              'focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
              { 'right-32 top-32': noPadding, 'right-48 top-48 ': !noPadding },
            )}
          >
            <X size={18} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogHeader>
        <div className="w-full px-48">{customComponent}</div>
      </DialogContent>
    </Dialog>
  )
}
