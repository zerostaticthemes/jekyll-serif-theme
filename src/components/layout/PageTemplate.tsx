import type { ReactNode } from 'react'
import { useEffect } from 'react'

interface PageTemplateProps {
  children: ReactNode
  title: string
}

const PageTemplate = ({ children, title }: PageTemplateProps) => {
  useEffect(() => {
    document.title = `${title} | SEAS`
  }, [title])

  return (
    <div className="pt-20 bg-[#F8F8F8] min-h-[calc(100vh-80px)]">
      {children}
    </div>
  )
}

export default PageTemplate