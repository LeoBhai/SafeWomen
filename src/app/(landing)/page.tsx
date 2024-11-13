'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  SafetyOutlined,
  GlobalOutlined,
  AlertOutlined,
  ShareAltOutlined,
  TeamOutlined,
  DashboardOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Instant Location Sharing`,
      description: `Share your real-time location and journey details with trusted contacts in just one tap - no signup required.`,
      icon: <ShareAltOutlined />,
    },
    {
      heading: `State Safety Index`,
      description: `Access comprehensive safety metrics for different states in India to make informed travel decisions.`,
      icon: <DashboardOutlined />,
    },
    {
      heading: `Emergency SOS`,
      description: `Send instant SOS alerts with your location to emergency contacts and nearby authorities.`,
      icon: <AlertOutlined />,
    },
    {
      heading: `Safety Network`,
      description: `Build your trusted circle of friends and family who can monitor your journey in real-time.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Nationwide Coverage`,
      description: `Access safety features and emergency support across all major Indian cities.`,
      icon: <GlobalOutlined />,
    },
    {
      heading: `Privacy First`,
      description: `Your data is encrypted and only shared with contacts you explicitly choose.`,
      icon: <SafetyOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Priya Sharma`,
      designation: `College Student, Delhi`,
      content: `SafeHer gives me confidence to take late night classes. My parents can track my cab rides home and I feel much safer.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Anjali Mehta`,
      designation: `IT Professional, Bangalore`,
      content: `As someone who frequently travels for work, the state safety index helps me prepare better for my business trips.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `Deepika Patel`,
      designation: `Digital Nomad`,
      content: `The no-signup feature is brilliant! I can share my location instantly with family when taking cabs in new cities.`,
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `How It Works`,
      link: `#how-it-works`,
    },
    {
      title: `Get Started`,
      link: `/register`,
    },
  ]

  const questionAnswers = [
    {
      question: `Do I need to create an account to use SafeHer?`,
      answer: `No, SafeHer works instantly without any registration. Just open and share your journey details.`,
    },
    {
      question: `How does the emergency SOS feature work?`,
      answer: `Press the SOS button to instantly share your location with emergency contacts and nearby authorities.`,
    },
    {
      question: `Is my location data secure?`,
      answer: `Yes, your location is encrypted and only shared with contacts you explicitly choose during each journey.`,
    },
    {
      question: `Does SafeHer work in all Indian cities?`,
      answer: `Yes, SafeHer works across all major Indian cities with state-specific safety metrics and emergency support.`,
    },
  ]

  const steps = [
    {
      heading: `Open SafeHer`,
      description: `No registration needed - access safety features instantly`,
    },
    {
      heading: `Add Journey Details`,
      description: `Enter your cab/transport info and expected arrival time`,
    },
    {
      heading: `Select Trusted Contacts`,
      description: `Choose friends/family to share your journey with`,
    },
    {
      heading: `Travel Safely`,
      description: `Your contacts monitor your journey in real-time`,
    },
  ]

  const painPoints = [
    {
      emoji: `😰`,
      title: `Feeling unsafe during late night travel`,
    },
    {
      emoji: `😣`,
      title: `Worried family waiting for "reached safely" message`,
    },
    {
      emoji: `😨`,
      title: `Uncertainty in new cities and unfamiliar areas`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/women/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Move Freely, Stay Safe - Your Personal Safety Companion`}
        subtitle={`Share your journey details instantly with trusted contacts. No signup required.`}
        buttonText={`Start Using SafeHer`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/qdOats-womensf-M8e1`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={50000}
            suffixText={`women feeling safer`}
          />
        }
      />
      <LandingPainPoints
        title={`Every 2 minutes, a woman faces harassment in India. Don't let fear limit your freedom.`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Safety Made Simple - No Registration Required`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Your Complete Safety Solution`}
        subtitle={`Everything you need to travel confidently across India`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Women Moving Freely`}
        subtitle={`See how SafeHer is empowering women across India`}
        testimonials={testimonials}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions`}
        subtitle={`Everything you need to know about using SafeHer`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Take Control of Your Safety Today`}
        subtitle={`Join 50,000+ women who travel confidently with SafeHer`}
        buttonText={`Start Using SafeHer`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
