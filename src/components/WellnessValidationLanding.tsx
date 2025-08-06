import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Brain, 
  Shield, 
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  FileText,
  Globe,
  Star,
  Microscope,
  TrendingUp,
  Activity,
  Building2,
  Phone,
  Mail,
  X
} from 'lucide-react';

const WellnessValidationLanding = () => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  const validationPackages = [
    {
      id: 'pilot',
      name: 'Pilot Study',
      price: '₹2.5L - ₹4L',
      duration: '2 weeks',
      timeline: '4 weeks',
      participants: '30',
      color: 'blue',
      features: [
        'Basic EEG analysis',
        'Statistical significance testing',
        'Marketing summary report',
        'Digital certificate',
        'Remote data collection'
      ],
      ideal: 'New product launch validation'
    },
    {
      id: 'clinical',
      name: 'Clinical Validation',
      price: '₹8L - ₹20L',
      duration: '4-8 weeks',
      timeline: '8-12 weeks',
      participants: '100-300',
      color: 'purple',
      popular: true,
      features: [
        'Advanced neural analysis',
        'Peer-review publication support',
        'FSSAI compliance documentation',
        'Certification badge',
        'In-center + remote data',
        'Statistical consulting'
      ],
      ideal: 'Market-ready product credibility'
    },
    {
      id: 'realworld',
      name: 'Real-World Evidence',
      price: '₹25L - ₹50L',
      duration: '3-6 months',
      timeline: '4-6 months',
      participants: '500+',
      color: 'green',
      features: [
        'Multi-center data collection',
        'Health economics analysis',
        'Post-market surveillance',
        'International publication',
        'Regulatory support',
        'Long-term follow-up'
      ],
      ideal: 'Enterprise-grade validation'
    }
  ];

  const validationPhases = [
    {
      phase: 1,
      title: 'Study Design & Protocol',
      duration: '1-2 weeks',
      icon: FileText,
      tasks: [
        'Custom study protocol development',
        'Statistical analysis plan',
        'Regulatory documentation',
        'IRB submission support'
      ]
    },
    {
      phase: 2,
      title: 'Participant Recruitment',
      duration: '2-3 weeks',
      icon: Users,
      tasks: [
        'Access to 50,000+ user database',
        'Targeted participant screening',
        'Informed consent process',
        'Baseline assessments'
      ]
    },
    {
      phase: 3,
      title: 'Data Collection & Monitoring',
      duration: '2-12 weeks',
      icon: Activity,
      tasks: [
        'Remote EEG monitoring',
        'Bengaluru center sessions',
        'Real-time quality monitoring',
        'Compliance tracking'
      ]
    },
    {
      phase: 4,
      title: 'Analysis & Reporting',
      duration: '2-4 weeks',
      icon: BarChart3,
      tasks: [
        'Statistical analysis',
        'Clinical significance assessment',
        'Regulatory summary',
        'Marketing materials'
      ]
    },
    {
      phase: 5,
      title: 'Publication & Marketing',
      duration: '4-8 weeks',
      icon: Globe,
      tasks: [
        'Manuscript preparation',
        'Peer-review support',
        'Press release creation',
        'Certification badge delivery'
      ]
    }
  ];

  const successStories = [
    {
      product: 'NeuroCalm Tea',
      brand: 'Himalaya Wellness',
      result: '67% reduction in stress-related brain activity',
      participants: 150,
      duration: '6 weeks',
      icon: '🍃'
    },
    {
      product: 'FocusFlow App',
      brand: 'Mindful Tech',
      result: '52% improvement in sustained attention',
      participants: 280,
      duration: '8 weeks',
      icon: '📱'
    },
    {
      product: 'RestorePlus Supplement',
      brand: 'Patanjali Ayurved',
      result: '78% faster recovery from cognitive load',
      participants: 320,
      duration: '12 weeks',
      icon: '💊'
    }
  ];

  const ContactModal = () => {
    const [formData, setFormData] = useState({
      company: '',
      contact: '',
      email: '',
      product: '',
      category: '',
      claims: '',
      budget: '',
      timeline: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
      console.log('Form submitted:', formData);
      setShowContactModal(false);
      // You could integrate with a CRM or send email here
    };

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Start Your Validation Study</h2>
              <p className="text-gray-400">Get a custom quote for your wellness product validation</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setShowContactModal(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your name"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="contact@yourcompany.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Product you want to validate"
                value={formData.product}
                onChange={(e) => setFormData({...formData, product: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Category *
              </label>
              <select
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select category</option>
                <option value="supplements">Supplements & Nutraceuticals</option>
                <option value="apps">Wellness Apps & Digital Health</option>
                <option value="foods">Functional Foods & Beverages</option>
                <option value="devices">Fitness & Recovery Devices</option>
                <option value="mental-health">Mental Health & Meditation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Claims to Validate
              </label>
              <textarea
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-24"
                placeholder="E.g., 'Reduces stress levels', 'Improves focus and concentration', etc."
                value={formData.claims}
                onChange={(e) => setFormData({...formData, claims: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option value="">Select budget</option>
                  <option value="pilot">₹2.5L - ₹4L (Pilot Study)</option>
                  <option value="clinical">₹8L - ₹20L (Clinical Validation)</option>
                  <option value="realworld">₹25L+ (Real-World Evidence)</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline
                </label>
                <select
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">ASAP (4-6 weeks)</option>
                  <option value="normal">Normal (8-12 weeks)</option>
                  <option value="flexible">Flexible (3-6 months)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowContactModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              >
                Get Custom Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation Header */}
      <div className="sticky top-0 bg-card/90 backdrop-blur-sm border-b border-border z-40">
        <div className="container-responsive py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="btn-primary-enhanced p-2 bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-transform shadow-neural-sm"
              >
                <Brain className="h-5 w-5 text-white" />
              </button>
              <Button 
                onClick={() => navigate('/')} 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground font-sans tablet-optimized"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Introduction
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate('/demo-interface')}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-sans"
              >
                View Demo Platform
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-card/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        
        <div className="relative container-responsive py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12 xl:space-y-16 max-w-7xl mx-auto">
            {/* Company Logo & Branding */}
            <div className="flex justify-center">
              <div className="btn-primary-enhanced p-4 lg:p-6 xl:p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl lg:rounded-3xl shadow-neural-lg hover:shadow-neural-glow transform hover:scale-105 transition-all duration-300">
                <Brain className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 text-white" />
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6 lg:space-y-8 xl:space-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground leading-tight font-sans tracking-tight">
                Validate Your
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2 lg:mt-4">
                  Wellness Product Claims
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-sans">
                Scientifically-backed neural data validation for wellness brands. 
                From pilot studies to peer-reviewed publications.
              </p>
            </div>
            
            {/* Credibility Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              <Badge className="bg-accent/20 text-accent border-accent/50 px-4 py-2 text-sm lg:text-base font-sans font-medium">
                <Shield className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                FSSAI Compliant
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/50 px-4 py-2 text-sm lg:text-base font-sans font-medium">
                <Award className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                IRB Approved
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/50 px-4 py-2 text-sm lg:text-base font-sans font-medium">
                <Microscope className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                Peer-Review Ready
              </Badge>
            </div>

            {/* Social Proof */}
            <div className="card-enhanced bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 lg:p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 lg:gap-4 mb-3">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-card shadow-neural-sm" />
                  ))}
                </div>
                <span className="text-foreground font-bold text-lg lg:text-xl font-sans ml-2">
                  Join 200+ wellness brands
                </span>
              </div>
              <p className="text-muted-foreground text-sm lg:text-base font-sans">
                who trust SkyBrain for neural data validation
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center max-w-lg mx-auto">
              <Button
                onClick={() => setShowContactModal(true)}
                size="lg"
                className="btn-primary-enhanced bg-gradient-to-r from-primary to-secondary hover:shadow-neural-md px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-sans font-medium"
              >
                <Zap className="h-5 w-5 lg:h-6 lg:w-6 mr-2" />
                Start Your Validation Study
              </Button>
              <Button
                onClick={() => navigate('/demo-interface')}
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-neural-sm px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-sans"
              >
                View Demo Platform
                <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Packages */}
      <div className="section-organic section-curved-top bg-gradient-to-b from-background to-card/30 py-20 sm:py-24 lg:py-32 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-3 rounded-full mb-6 font-sans font-medium">
              <Zap className="h-5 w-5" />
              Validation Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 lg:mb-8 font-sans tracking-tight leading-tight">
              Choose Your
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Validation Package
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-sans">
              From quick pilot studies to comprehensive real-world evidence generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-16">
            {validationPackages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`group relative ${pkg.popular ? 'lg:scale-105 lg:-translate-y-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full font-sans font-bold shadow-neural-lg">
                      <Star className="h-4 w-4" />
                      Most Popular
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                )}
                
                <Card className={`process-flow-card h-full bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group-hover:shadow-neural-xl ${
                  pkg.popular ? 'ring-2 ring-secondary/30' : ''
                }`}>
                  {/* Package Header */}
                  <CardHeader className="text-center pb-6 lg:pb-8 relative">
                    <div className={`hexagon !w-20 !h-20 lg:!w-24 lg:!h-24 !mx-auto !mb-6 ${
                      pkg.color === 'blue' ? 'bg-gradient-to-br from-primary to-primary/80' :
                      pkg.color === 'purple' ? 'bg-gradient-to-br from-secondary to-secondary/80' :
                      'bg-gradient-to-br from-accent to-accent/80'
                    }`}>
                      <Building2 className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    
                    <CardTitle className="text-foreground text-xl sm:text-2xl lg:text-3xl mb-4 font-sans tracking-tight">
                      {pkg.name}
                    </CardTitle>
                    <div className="space-y-3 lg:space-y-4">
                      <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-sans ${
                        pkg.color === 'blue' ? 'text-primary' :
                        pkg.color === 'purple' ? 'text-secondary' :
                        'text-accent'
                      }`}>
                        {pkg.price}
                      </div>
                      <div className="text-sm lg:text-base text-muted-foreground font-sans font-medium bg-muted/20 px-4 py-2 rounded-full">
                        {pkg.ideal}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 lg:space-y-8 p-6 lg:p-8">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/10 rounded-xl border border-border/30">
                        <Users className="h-6 w-6 lg:h-7 lg:w-7 text-primary mx-auto mb-2" />
                        <div className="font-bold text-foreground text-lg lg:text-xl font-sans">{pkg.participants}</div>
                        <div className="text-muted-foreground text-xs lg:text-sm font-sans">Participants</div>
                      </div>
                      <div className="text-center p-4 bg-muted/10 rounded-xl border border-border/30">
                        <Clock className="h-6 w-6 lg:h-7 lg:w-7 text-secondary mx-auto mb-2" />
                        <div className="font-bold text-foreground text-lg lg:text-xl font-sans">{pkg.timeline}</div>
                        <div className="text-muted-foreground text-xs lg:text-sm font-sans">Timeline</div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-foreground font-sans mb-4">What's Included</h4>
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-muted/5 rounded-lg hover:bg-muted/10 transition-colors">
                          <div className="w-5 h-5 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-muted-foreground text-sm lg:text-base font-sans leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      onClick={() => setShowContactModal(true)}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-neural-md px-6 py-4 text-base lg:text-lg font-sans font-medium group-hover:scale-105 transition-all duration-300"
                    >
                      Get Started with {pkg.name}
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Trust Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl px-8 py-6 font-sans">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-card" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-foreground font-bold text-lg">200+ Successful Validations</div>
                <div className="text-muted-foreground text-sm">Trusted by wellness brands worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Phase Process */}
      <div className="section-organic section-wave-top bg-gradient-to-b from-card/20 to-background py-20 sm:py-24 lg:py-32 relative">
        {/* Floating Background Elements */}
        <div className="floating-element w-32 h-32 top-20 left-10 opacity-30"></div>
        <div className="floating-element w-24 h-24 top-40 right-16 opacity-20"></div>
        <div className="floating-element w-20 h-20 bottom-32 left-1/3 opacity-25"></div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 font-sans font-medium">
              <Activity className="h-5 w-5" />
              Scientific Validation Journey
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 lg:mb-8 font-sans tracking-tight leading-tight">
              Our 5-Phase
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Validation Process
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-sans">
              A systematic approach from study design to publication, ensuring scientific rigor at every step
            </p>
          </div>
          
          {/* Timeline Flow */}
          <div className="timeline-container max-w-6xl mx-auto">
            <div className="timeline-line"></div>
            <div className="flex flex-col lg:items-center lg:justify-center space-y-0">
              {validationPhases.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <div key={phase.phase} className="timeline-item">
                    {/* Timeline Node */}
                    <div className="timeline-node">
                      <span className="text-white font-bold text-xl lg:text-2xl font-mono">
                        {phase.phase}
                      </span>
                    </div>
                    
                    {/* Timeline Content */}
                    <div className="timeline-content process-flow-card">
                      <div className="flex items-start gap-4 lg:gap-6 mb-6">
                        <div className="hexagon !w-16 !h-16 lg:!w-20 lg:!h-20 !m-0 flex-shrink-0">
                          <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground font-sans tracking-tight leading-tight mb-2">
                            {phase.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                            <span className="text-primary font-semibold text-sm lg:text-base font-sans">
                              Duration: {phase.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 lg:space-y-4">
                        <h4 className="text-lg lg:text-xl font-bold text-foreground font-sans mb-4">
                          Key Activities & Deliverables
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {phase.tasks.map((task, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                              <div className="w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-muted-foreground lg:text-base font-sans leading-relaxed flex-1">
                                {task}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Phase Flow Arrow */}
                      {index < validationPhases.length - 1 && (
                        <div className="hidden lg:flex items-center justify-center mt-8">
                          <div className="flex items-center gap-2 text-primary/70">
                            <div className="w-12 h-px bg-gradient-to-r from-primary to-secondary"></div>
                            <ArrowRight className="h-5 w-5" />
                            <div className="w-12 h-px bg-gradient-to-r from-primary to-secondary"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Completion Badge */}
            <div className="text-center mt-16 lg:mt-20">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-full font-sans font-bold text-lg lg:text-xl shadow-neural-lg">
                <Award className="h-6 w-6" />
                Validation Complete - Ready for Market
                <Award className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="section-organic section-curved-bottom bg-gradient-to-b from-background to-card/20 py-20 sm:py-24 lg:py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-16 w-56 h-56 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-6 py-3 rounded-full mb-6 font-sans font-medium">
              <TrendingUp className="h-5 w-5" />
              Client Success Stories
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 lg:mb-8 font-sans tracking-tight leading-tight">
              Validation
              <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-sans">
              Real results from wellness brands who trusted SkyBrain with their product validation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
            {successStories.map((story, index) => (
              <Card key={index} className="process-flow-card group bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-500">
                <CardContent className="p-6 lg:p-8">
                  {/* Product Header */}
                  <div className="text-center mb-6">
                    <div className="text-6xl lg:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {story.icon}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-foreground font-sans mb-2 tracking-tight">
                      {story.product}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-sans font-medium">
                      <Building2 className="h-3 w-3" />
                      {story.brand}
                    </div>
                  </div>
                  
                  {/* Results Highlight */}
                  <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-6 mb-6 border border-accent/20 group-hover:border-accent/40 transition-colors">
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-accent mb-2 font-sans tracking-tight">
                        {story.result}
                      </div>
                      <div className="text-xs lg:text-sm text-muted-foreground font-sans font-medium bg-accent/10 px-3 py-1 rounded-full inline-block">
                        ✓ Clinically Validated Result
                      </div>
                    </div>
                  </div>
                  
                  {/* Study Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/10 rounded-xl border border-border/30 group-hover:bg-muted/20 transition-colors">
                      <Users className="h-5 w-5 text-secondary mx-auto mb-2" />
                      <div className="font-bold text-foreground text-lg font-sans">{story.participants}</div>
                      <div className="text-muted-foreground text-xs font-sans">Participants</div>
                    </div>
                    <div className="text-center p-4 bg-muted/10 rounded-xl border border-border/30 group-hover:bg-muted/20 transition-colors">
                      <Clock className="h-5 w-5 text-accent mx-auto mb-2" />
                      <div className="font-bold text-foreground text-lg font-sans">{story.duration}</div>
                      <div className="text-muted-foreground text-xs font-sans">Study Duration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card/60 backdrop-blur-sm border border-border rounded-2xl px-8 py-6">
              <div className="text-left">
                <div className="text-foreground font-bold text-lg lg:text-xl font-sans">Ready to Join Our Success Stories?</div>
                <div className="text-muted-foreground text-sm lg:text-base font-sans">Get your validation study started today</div>
              </div>
              <Button
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-accent to-primary hover:shadow-neural-md px-6 py-3 font-sans font-medium"
              >
                Start Your Study
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose SkyBrain */}
      <div className="bg-gray-900/50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose SkyBrain for Validation?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              The only neural data validation platform built specifically for wellness brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Neural Data Expertise</h3>
                <p className="text-gray-400 text-sm">5+ years specializing in EEG analysis for wellness applications</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Large Participant Network</h3>
                <p className="text-gray-400 text-sm">50,000+ pre-screened participants ready for studies</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-green-500/50 transition-colors">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Bengaluru Research Center</h3>
                <p className="text-gray-400 text-sm">State-of-the-art facility for premium in-person validation studies</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-orange-500/50 transition-colors">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
                <p className="text-gray-400 text-sm">200+ successful studies with 95% client satisfaction rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Validate Your Wellness Product?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 200+ wellness brands who trust SkyBrain for scientifically-backed product validation. 
            Get your custom quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              onClick={() => setShowContactModal(true)}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-4 text-lg font-medium"
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg"
              onClick={() => window.open('mailto:validation@skybrain.ai')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Average response time: 24 hours | Free consultation included</p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && <ContactModal />}
    </div>
  );
};

export default WellnessValidationLanding;