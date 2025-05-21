"use client"

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Calendar } from "lucide-react"

interface SchedulingModalProps {
  buttonClassName?: string;
}

export function SchedulingModal({ buttonClassName }: SchedulingModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    // Remove any existing scripts first
    const existingScript = document.querySelector('script[src="https://static.zcal.co/embed/v1/embed.js"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add the script tag
    const script = document.createElement('script')
    script.src = "https://static.zcal.co/embed/v1/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Clean up
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName || "bg-black text-white hover:bg-black/90"}>
          Schedule a Consultation
          <Calendar className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] h-[85vh] max-h-[850px] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Schedule a Consultation</DialogTitle>
        <div className="h-full w-full">
          <div className="zcal-inline-widget w-full h-full">
            <a href="https://zcal.co/i/8N-g7riO">
              Beehive Advisors Consultation - Schedule a meeting
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 