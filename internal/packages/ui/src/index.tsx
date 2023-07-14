import type { FC, HTMLAttributes } from 'react'
import cn from 'clsx'

export * from './layout.js'
export * from './head.js'
export { default as Text } from './text.js'
export { default as Input } from './input.js'
export { default as Button } from './button.js'
export { default as LoadingDots } from './loading-dots.js'
export * from './link.js'
export { default as Code } from './code.js'
export { default as List } from './list.js'
export { default as Snippet } from './snippet.js'

export const Page: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <main {...props} className={cn('w-full max-w-3xl mx-auto py-16', className)}>
    {children}
  </main>
)
