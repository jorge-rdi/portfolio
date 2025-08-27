import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { t } = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{t('contactTitle')}</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">{t('email')}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground break-all">john.doe@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">{t('phone')}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">{t('location')}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{t('sendMessage')}</CardTitle>
              <CardDescription className="text-sm">{t('contactSubtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <Input 
                    name="name" 
                    placeholder={t('namePlaceholder')} 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('messagePlaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="text-sm sm:text-base resize-none"
                  />
                </div>
                <Button type="submit" className="w-full text-sm sm:text-base">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  {t('sendMessage')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
